import { useState } from 'react';

export default function AuthorWebsite() {
  const [message, setMessage] = useState('');

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen font-sans">
      <header className="text-center py-10 border-b border-gray-700">
        <h1 className="text-5xl font-bold text-red-700">Graeme King</h1>
        <p className="text-xl mt-4 italic">Exploring the depths of human cognition and the darkness within.</p>
      </header>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">About Me</h2>
        <p className="text-lg">
          I am a multi-genre author who enjoys psychological thrillers based around deep cognitive behaviors, exploring both the light and dark sides of people. My aim is to inspire the masses to live in their sovereignty, standing up for themselves, unfiltered and unveiled from societal norms.
        </p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Upcoming Books</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">The Host of Asmodeus</h3>
            <p className="mt-2">An NC-17 hard-hitting psychological thriller. Coming April 2025.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold">Raven Nyx - The Throne of Desire</h3>
            <p className="mt-2">Dark, seductive, and thrilling. Coming July 2025.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Fan Blog</h2>
        <p className="text-lg">Join discussions with fellow fans. (Blog integration placeholder)</p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Contact Me</h2>
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `mailto:graemeking17@hotmail.com?subject=Website Inquiry`;
          }}
        >
          <textarea
            className="p-3 bg-gray-800 rounded-md"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="bg-red-700 py-2 rounded-md font-bold hover:bg-red-600">
            Send Message
          </button>
        </form>
      </section>

      <footer className="text-center py-6 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} Graeme King. All rights reserved.</p>
      </footer>
    </div>
  );
}