"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
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
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyles = `
    w-full p-4
    bg-gray-50 dark:bg-gray-900/50
    border border-gray-300 dark:border-gray-800/50
    rounded-lg
    text-gray-900 dark:text-white
    placeholder-gray-500 dark:placeholder-gray-500
    focus:outline-none focus:border-gray-400 dark:focus:border-gray-600
    focus:ring-2 focus:ring-gray-400/50 dark:focus:ring-gray-600/50
    transition-all duration-300
    hover:border-gray-400 dark:hover:border-gray-700
  `;

  return (
    <SectionWrapper id="contact" title="Contact" className="max-w-4xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className={inputStyles}
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            type="email"
            placeholder="Email"
            className={inputStyles}
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Message must be at least 10 characters" },
            })}
            placeholder="Message"
            rows={6}
            className={`${inputStyles} resize-none`}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {submitStatus === "success" && (
          <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700/50 rounded-lg text-green-800 dark:text-green-400">
            Message sent successfully!
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700/50 rounded-lg text-red-800 dark:text-red-400">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </SectionWrapper>
  );
}
