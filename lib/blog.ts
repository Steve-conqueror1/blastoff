import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  keywords: string[];
  contentHtml: string;
}

const blogDirectory = path.join(process.cwd(), "content/blog");

/**
 * Super simple frontmatter parser.
 * Extracts key-value pairs between the first two `---` markers.
 */
function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = frontmatterRegex.exec(fileContent);
  const metadata: Record<string, string | string[]> = {};
  let bodyContent = fileContent;

  if (match) {
    const rawYaml = match[1];
    bodyContent = fileContent.slice(match[0].length).trim();

    const lines = rawYaml.split("\n");
    for (const line of lines) {
      const parts = line.split(":");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        let value = parts.slice(1).join(":").trim();
        // Remove surrounding quotes if present
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        // Handle array representation [a, b, c]
        if (value.startsWith("[") && value.endsWith("]")) {
          metadata[key] = value
            .slice(1, -1)
            .split(",")
            .map((item) => item.trim().replace(/^['"]|['"]$/g, ""));
        } else {
          metadata[key] = value;
        }
      }
    }
  }

  return { metadata, bodyContent };
}

/**
 * A basic markdown to HTML converter that handles:
 * - Headings (##, ###)
 * - Lists (* item)
 * - Bold text (**text**)
 * - Paragraphs (separated by double newlines)
 */
function markdownToHtml(markdown: string): string {
  const lines = markdown.split(/\r?\n/);
  const htmlParts: string[] = [];
  let inList = false;

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();

    if (!line) {
      if (inList) {
        htmlParts.push("</ul>");
        inList = false;
      }
      continue;
    }

    // Bold text (**text**) -> <strong>text</strong>
    line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    // Headings
    if (line.startsWith("## ")) {
      if (inList) {
        htmlParts.push("</ul>");
        inList = false;
      }
      const title = line.replace("## ", "");
      htmlParts.push(`<h2 class="text-2xl font-bold font-heading text-dark mt-8 mb-4">${title}</h2>`);
    } else if (line.startsWith("### ")) {
      if (inList) {
        htmlParts.push("</ul>");
        inList = false;
      }
      const title = line.replace("### ", "");
      htmlParts.push(`<h3 class="text-xl font-bold font-heading text-dark mt-6 mb-3">${title}</h3>`);
    }
    // Bullet lists
    else if (line.startsWith("* ")) {
      if (!inList) {
        htmlParts.push(`<ul class="list-disc pl-6 mb-4 space-y-2">`);
        inList = true;
      }
      const item = line.replace("* ", "");
      htmlParts.push(`<li>${item}</li>`);
    }
    // Standard paragraphs
    else {
      if (inList) {
        htmlParts.push("</ul>");
        inList = false;
      }
      htmlParts.push(`<p class="leading-relaxed mb-4 text-gray-700">${line}</p>`);
    }
  }

  if (inList) {
    htmlParts.push("</ul>");
  }

  return htmlParts.join("\n");
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { metadata, bodyContent } = parseFrontmatter(fileContents);

      return {
        slug,
        title: (metadata.title as string) || "Untitled",
        description: (metadata.description as string) || "",
        date: (metadata.date as string) || "",
        author: (metadata.author as string) || "Blast Off Team",
        image: (metadata.image as string) || "/images/1.avif",
        keywords: (metadata.keywords as string[]) || [],
        contentHtml: markdownToHtml(bodyContent),
      } as BlogPost;
    });

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { metadata, bodyContent } = parseFrontmatter(fileContents);

  return {
    slug,
    title: (metadata.title as string) || "Untitled",
    description: (metadata.description as string) || "",
    date: (metadata.date as string) || "",
    author: (metadata.author as string) || "Blast Off Team",
    image: (metadata.image as string) || "/images/1.avif",
    keywords: (metadata.keywords as string[]) || [],
    contentHtml: markdownToHtml(bodyContent),
  };
}
