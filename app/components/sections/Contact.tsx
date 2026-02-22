"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { personalInfo } from "@/app/data";
import { SectionWrapper, Button } from "@/app/components/ui";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = `
    w-full px-4 py-3 sm:py-4
    bg-white dark:bg-gray-900
    border border-gray-300 dark:border-gray-700
    rounded-xl
    text-gray-900 dark:text-white text-base
    placeholder-gray-500 dark:placeholder-gray-500
    focus:outline-none focus:border-blue-500 dark:focus:border-blue-500
    focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-500/20
    transition-all duration-300
    hover:border-gray-400 dark:hover:border-gray-600
  `;

  return (
    <SectionWrapper id="contact" title="Get in Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
        {/* Contact info */}
        <div>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Have a project in mind or want to discuss opportunities? 
            I&apos;d love to hear from you. Fill out the form or reach out directly.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                <span className="text-xl">📧</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">Email</p>
                <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base break-all">
                  {personalInfo.email}
                </p>
                {personalInfo.alumniEmail && (
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm break-all mt-1">
                    {personalInfo.alumniEmail}
                  </p>
                )}
              </div>
            </a>
            
            <a 
              href={personalInfo.socialLinks.find(l => l.name === "LinkedIn")?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-xl">💼</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="text-gray-900 dark:text-white font-medium text-sm sm:text-base">
                  Connect with me
                </p>
              </div>
            </a>
          </div>
        </div>
        
        {/* Contact form */}
        <div className="bg-gray-50 dark:bg-gray-900/30 rounded-2xl p-5 sm:p-8 border border-gray-200 dark:border-gray-800/50">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Your name"
                className={inputStyles}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                placeholder="your@email.com"
                className={inputStyles}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Message must be at least 10 characters" },
                })}
                placeholder="Tell me about your project..."
                rows={5}
                className={`${inputStyles} resize-none`}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting} 
              size="lg" 
              className="w-full justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <span className="mr-2">✉️</span>
                  Send Message
                </>
              )}
            </Button>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-400 text-sm sm:text-base flex items-center gap-2">
                <span>✅</span> Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-400 text-sm sm:text-base flex items-center gap-2">
                <span>❌</span> Failed to send message. Please try again or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
