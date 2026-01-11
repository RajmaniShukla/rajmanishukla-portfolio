"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        reset();
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-gray-800/50">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Contact
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input 
            {...register("name", { required: "Name is required" })} 
            placeholder="Name" 
            className="w-full p-4 bg-gray-900/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-600/50 transition-all duration-300 hover:border-gray-700"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <input 
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })} 
            type="email"
            placeholder="Email" 
            className="w-full p-4 bg-gray-900/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-600/50 transition-all duration-300 hover:border-gray-700"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <textarea 
            {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })} 
            placeholder="Message" 
            rows={6}
            className="w-full p-4 bg-gray-900/50 border border-gray-800/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-600 focus:ring-2 focus:ring-gray-600/50 transition-all duration-300 hover:border-gray-700 resize-none"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        
        {submitStatus === "success" && (
          <div className="p-4 bg-green-900/30 border border-green-700/50 rounded-lg text-green-400">
            Message sent successfully!
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-lg text-red-400">
            Failed to send message. Please try again.
          </div>
        )}
      </form>
    </section>
  );
}
