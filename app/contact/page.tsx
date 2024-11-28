export default function ContactPage() {
    return (
      <section className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <form className="mt-4 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded"
            rows={4}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </section>
    );
  }
  