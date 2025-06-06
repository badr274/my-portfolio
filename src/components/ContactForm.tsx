"use client";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be no more than 500 characters"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data: z.infer<typeof contactSchema>) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_sglrw14",
        "template_3sogoio",
        data,
        "AO5huPRp7N04kqI7K"
      );
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <form className="space-y-4 sm:space-y-5 md:space-y-6" onSubmit={onSubmit}>
      <div>
        <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          {...register("name")}
          placeholder="Your name"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-dark"
        />
        {errors?.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          {...register("email")}
          placeholder="your@email.com"
          className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-dark"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-200 mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Type your message here..."
          className="w-full px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-dark resize-none"
          defaultValue={""}
        />
        {errors?.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full flex items-center gap-x-1 justify-center bg-dark dark:bg-light cursor-pointer hover:bg-primary-dark transition-colors duration-300 text-light dark:text-dark font-semibold py-2 sm:py-3 rounded-xl shadow-md text-sm sm:text-base"
      >
        {loading ? (
          <>
            <svg
              aria-hidden="true"
              className="inline sm:w-5 sm:h-5 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span>sending</span>
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
