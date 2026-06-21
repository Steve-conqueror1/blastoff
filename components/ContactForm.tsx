"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { submitContactForm } from "@/app/actions/contact";

const initialState = {
  success: false,
  error: null as string | null,
  errors: {} as Record<string, string[]>,
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast.success("Quote request submitted successfully!");
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
      <h3 className="font-heading text-2xl font-bold text-dark mb-2">Request a Free Quote</h3>
      <p className="font-sans text-sm text-gray-500 mb-6 leading-relaxed">
        Fill out the form below and our knowledgeable team will review your requirements and get back to you shortly.
      </p>

      <form ref={formRef} action={formAction} className="space-y-5 font-sans text-sm">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1.5">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
            placeholder="John Doe"
          />
          {state.errors?.name && (
            <p className="text-xs text-primary font-medium mt-1">{state.errors.name[0]}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-1.5">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
            placeholder="780-123-4567"
          />
          {state.errors?.phone && (
            <p className="text-xs text-primary font-medium mt-1">{state.errors.phone[0]}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1.5">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
            placeholder="john@example.com"
          />
          {state.errors?.email && (
            <p className="text-xs text-primary font-medium mt-1">{state.errors.email[0]}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1.5">
            Tell Us About Your Project <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition resize-none"
            placeholder="Please specify services needed (e.g. hood cleaning, Ansul inspection, extinguisher recharge) and your location."
          ></textarea>
          {state.errors?.message && (
            <p className="text-xs text-primary font-medium mt-1">{state.errors.message[0]}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full inline-flex items-center justify-center rounded-lg bg-primary py-3.5 text-sm font-bold text-white shadow-md hover:bg-red-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Submitting...
            </span>
          ) : (
            "Request a Free Quote"
          )}
        </button>
      </form>
    </div>
  );
}
