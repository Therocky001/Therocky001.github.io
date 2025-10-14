import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  console.log('App component is rendering!'); // Debug log
  
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      {/* Simple Header for Testing */}
      <header className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-400">
          Ujjval Rajauriya
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Full-Stack Developer & Digital Marketing Expert
        </p>
        <div className="bg-slate-800 p-6 rounded-lg max-w-md mx-auto">
          <p className="text-green-400 font-semibold mb-2">✅ Portfolio is Working!</p>
          <p className="text-gray-300">This is a simplified version to test React functionality.</p>
        </div>
      </header>

      {/* Simple About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-400">About Me</h2>
          <div className="bg-slate-800 p-8 rounded-lg">
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate Full-Stack Developer with 4+ years of experience in creating 
              innovative web solutions. Currently managing digital marketing at Erigo 
              while pursuing B.Tech in AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Simple Contact */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-400">Get In Touch</h2>
          <p className="text-gray-300 mb-6">
            Email: cnttoujjval@gmail.com
          </p>
          <div className="text-green-400">
            Portfolio successfully loaded! 🎉
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;