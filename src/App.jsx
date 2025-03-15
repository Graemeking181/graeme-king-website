import { useEffect, useState } from "react";
import import "./App.css";


export default function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      <header className="text-center py-10 border-b border-gray-700 bg-black bg-opacity-50">
        <h1 className="text-5xl font-bold text-red-700">{content.author_name}</h1>
        <p className="text-xl mt-4 italic">{content.bio}</p>
        <img src="/author.jpg" alt="Author" className="w-32 h-32 rounded-full mx-auto mt-4" onError={(e) => e.target.style.display='none'} />
      </header>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Books</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {content.books.map((book, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <img src={`/${book.image}`} alt={book.title} className="w-full h-48 object-cover rounded-md" onError={(e) => e.target.style.display='none'} />
              <h3 className="text-2xl font-bold mt-4">{book.title}</h3>
              <p className="mt-2">{book.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Video Promotions</h2>
        {content.tiktok_link ? (
          <iframe
            src={content.tiktok_link}
            className="w-full h-64"
            allow="autoplay; encrypted-media"
            title="TikTok Video"
          ></iframe>
        ) : (
          <p className="text-lg">No video available at the moment.</p>
        )}
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Book Reviews</h2>
        <p className="text-lg">Fan comments & reviews coming soon...</p>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-4 text-red-600">Contact Me</h2>
        <p className="text-lg">Email: <a href={`mailto:${content.email}`} className="text-red-500">{content.email}</a></p>
        {content.tiktok_link && (
          <p className="text-lg">TikTok: <a href={content.tiktok_link} target="_blank" className="text-red-500">@darklightduality</a></p>
        )}
      </section>

      <footer className="text-center py-6 border-t border-gray-700">
        <p>&copy; {new Date().getFullYear()} {content.author_name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
