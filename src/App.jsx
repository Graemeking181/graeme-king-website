import { useEffect, useState } from "react";
import "./App.css";  // ✅ Keeps styling

export default function App() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/content.json")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div className="loading text-center text-2xl py-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      {/* HEADER - AUTHOR SECTION */}
      <header className="text-center py-10 border-b border-gray-700 bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-red-700">{content.author_name}</h1>
        <p className="text-lg mt-3 italic">{content.bio}</p>
        <img 
          src="/author.jpg" 
          alt="Author" 
          className="w-24 h-24 rounded-full mx-auto mt-4 shadow-lg object-cover"
          onError={(e) => e.target.style.display='none'} 
        />
      </header>

      {/* BOOKS SECTION */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-600 text-center">Books</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {content.books.map((book, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
              <img 
                src={`/${book.image}`} 
                alt={book.title} 
                className="w-48 h-64 mx-auto rounded-md shadow-md object-cover" 
                onError={(e) => e.target.style.display='none'} 
              />
              <h3 className="text-xl font-bold mt-3">{book.title}</h3>
              <p className="mt-2 text-sm">{book.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOK REVIEWS */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-600 text-center">Book Reviews</h2>
        <p className="text-md text-center">Fan comments & reviews coming soon...</p>
      </section>

      {/* CONTACT INFO */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-red-600 text-center">Contact Me</h2>
        <p className="text-md text-center">
          Email: <a href={`mailto:${content.email}`} className="text-red-500">{content.email}</a>
        </p>
        {content.tiktok_link && (
          <p className="text-md text-center mt-2">
            TikTok: <a href={content.tiktok_link} target="_blank" className="text-red-500">@darklightduality</a>
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-sm">&copy; {new Date().getFullYear()} {content.author_name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
