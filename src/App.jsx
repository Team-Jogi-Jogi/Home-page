import React, { useState } from 'react';
import { FaVideo, FaUsers, FaShieldAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from './components/Navbar';
import StreamCard from './components/StreamCard';
import { streams } from './data';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStreams = activeCategory === 'All' 
    ? streams 
    : streams.filter(stream => stream.category === activeCategory);

  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-[url('https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center flex items-center justify-center text-center p-4 bg-black bg-opacity-70 bg-blend-overlay">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Stream. Watch. Connect.</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">The Vibe is Here</p>
          <a href="#streams" className="inline-block px-8 py-4 bg-[var(--primary-color)] text-white rounded-lg text-lg hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
            Watch Live
          </a>
        </div>
      </section>

      <section id="streams" className="py-20 px-[5%]">
        <h2 className="text-4xl font-bold text-center mb-8">Popular Streams</h2>
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {['All', 'Gaming', 'Music', 'Talk Shows'].map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-[var(--primary-color)]' 
                  : 'bg-[var(--card-background)] hover:bg-[var(--primary-color)]'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStreams.map(stream => (
            <StreamCard key={stream.title} stream={stream} />
          ))}
        </div>
      </section>

      <section id="about" className="py-20 px-[5%] bg-[var(--card-background)]">
        <h2 className="text-4xl font-bold text-center mb-8">About STREAMVIBE</h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          STREAMVIBE is your go-to platform for seamless, interactive streaming.
          Whether you're watching or streaming, we ensure an engaging and
          high-quality experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8">
            <FaVideo className="text-5xl text-[var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">HD Streaming</h3>
            <p>Crystal clear quality</p>
          </div>
          <div className="text-center p-8">
            <FaUsers className="text-5xl text-[var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p>Connect with others</p>
          </div>
          <div className="text-center p-8">
            <FaShieldAlt className="text-5xl text-[var(--primary-color)] mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure</h3>
            <p>Safe environment</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-[5%]">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent successfully!');
          e.target.reset();
        }} className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="p-4 rounded-lg bg-[var(--card-background)] border-none"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-4 rounded-lg bg-[var(--card-background)] border-none"
          />
          <textarea
            placeholder="Message"
            required
            rows="6"
            className="p-4 rounded-lg bg-[var(--card-background)] border-none resize-vertical"
          ></textarea>
          <button
            type="submit"
            className="p-4 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-4 mt-8">
          <a href="#" className="text-2xl hover:text-[var(--primary-color)] transition-colors duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-[var(--primary-color)] transition-colors duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-[var(--primary-color)] transition-colors duration-300">
            <FaInstagram />
          </a>
        </div>
      </section>

      <footer className="bg-[var(--card-background)] py-12 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-[var(--primary-color)] font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Home</a>
              <a href="#about" className="hover:text-[var(--primary-color)] transition-colors duration-300">About Us</a>
              <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Rules</a>
              <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Legacy</a>
              <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Pricing</a>
              <a href="#contact" className="hover:text-[var(--primary-color)] transition-colors duration-300">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="text-[var(--primary-color)] font-bold mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-[var(--primary-color)] transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
          <div>
            <h3 className="text-[var(--primary-color)] font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-[var(--primary-color)] transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-[var(--primary-color)] transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-[var(--primary-color)] transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p>&copy; 2024 STREAMVIBE. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;