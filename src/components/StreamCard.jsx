import React from 'react';

function StreamCard({ stream }) {
  return (
    <div 
      className="bg-[var(--card-background)] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={() => window.location.href = stream.url}
    >
      <img 
        src={stream.thumbnail} 
        alt={stream.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{stream.title}</h3>
        <p className="text-gray-400 mb-2">{stream.streamer}</p>
        <p className="text-gray-400">{stream.viewers} viewers</p>
      </div>
    </div>
  );
}

export default StreamCard;