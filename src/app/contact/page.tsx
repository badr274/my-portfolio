import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Let&apos;s get in touch
        </h2>
        <p className="text-center text-xs sm:text-sm ms:text-base text-gray-600 dark:text-gray-300 mb-10">
          Feel free to reach out by filling the form below. I’ll get back to you
          as soon as possible.
        </p>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
