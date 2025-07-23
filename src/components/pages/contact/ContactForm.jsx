"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const watchedFields = watch();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", data);
      setIsSubmitted(true);

      // Reset form after successful submission
      reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-lora font-light text-gray-900">
            Thank You!
          </h3>
          <p className="text-gray-600 font-lora font-light">
            Your message has been sent successfully. We'll get back to you
            within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="mt-4 font-lora font-light"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-3xl font-lora font-light text-gray-900">
            Send an Enquiry
          </h2>
          <div className="flex items-center gap-4">
            <Send className="w-6 h-6 text-secondary" />
            <div className="h-0.5 w-20 bg-secondary" />
          </div>
          <p className="text-gray-600 font-lora font-light">
            Have a question or special request? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name *
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your Name"
              className={`font-lora font-light transition-colors duration-200 ${
                errors.name
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-secondary focus:ring-secondary"
              }`}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name must be less than 50 characters",
                },
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Name can only contain letters and spaces",
                },
              })}
            />
            {errors.name && (
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name.message}</span>
              </div>
            )}
          </div>

          {/* Phone and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-700"
              >
                Telephone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your Number eg.."
                className={`font-lora font-light transition-colors duration-200 ${
                  errors.phone
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
                {...register("phone", {
                  pattern: {
                    value: /^[+]?[1-9][\d]{0,15}$/,
                    message: "Please enter a valid phone number",
                  },
                })}
              />
              {errors.phone && (
                <div className="flex items-center gap-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.phone.message}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700"
              >
                Email *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className={`font-lora font-light transition-colors duration-200 ${
                  errors.email
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="flex items-center gap-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.email.message}</span>
                </div>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="Subject of your inquiry"
              className={`font-lora font-light transition-colors duration-200 ${
                errors.subject
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-secondary focus:ring-secondary"
              }`}
              {...register("subject", {
                maxLength: {
                  value: 100,
                  message: "Subject must be less than 100 characters",
                },
              })}
            />
            {errors.subject && (
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.subject.message}</span>
              </div>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message *
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              rows={6}
              className={`font-lora font-light resize-none transition-colors duration-200 ${
                errors.message
                  ? "border-red-300 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-200 focus:border-secondary focus:ring-secondary"
              }`}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: 1000,
                  message: "Message must be less than 1000 characters",
                },
              })}
            />
            <div className="flex justify-between items-center">
              {errors.message ? (
                <div className="flex items-center gap-1 text-red-600 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errors.message.message}</span>
                </div>
              ) : (
                <div></div>
              )}
              <div className="text-xs text-gray-500">
                {watchedFields.message?.length || 0}/1000
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !isValid}
            className={`w-full py-3 text-lg rounded-none transition-all duration-300 font-lora font-light ${
              isSubmitting || !isValid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-900 hover:bg-secondary text-white"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                SEND ENQUIRY
              </div>
            )}
          </Button>

          {/* Form Progress Indicator */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Form Completion</span>
              <span>
                {Object.values(watchedFields).filter(Boolean).length}/5 fields
                completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div
                className="bg-secondary h-1 rounded-full transition-all duration-300"
                style={{
                  width: `${
                    (Object.values(watchedFields).filter(Boolean).length / 5) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </form>

        {/* Additional Info */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 font-lora font-light text-center">
            * Required fields. We respect your privacy and will never share your
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
