import React, { useEffect, useState } from 'react';

const Anime = () => {
  const [anime, setAnime] = useState([]);

  
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch('https://api.jikan.moe/v4/seasons/upcoming');
        const data = await res.json();

        
        const filteredAnime = data.data.filter(item => item.images?.jpg?.image_url);
        setAnime(filteredAnime);
      } catch (err) {
        console.error('Error fetching anime:', err);
      }
    };

    fetchAnime();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-24 px-6">
      <h1 className="text-4xl font-bold text-teal-500 mb-4">Upcoming Anime</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {anime.map((item) => (
          <div key={item.mal_id} className="bg-zinc-900 rounded-lg shadow-md overflow-hidden relative">
            <img
              src={item.images?.jpg?.image_url.replace('w500', 'w780')} 
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-teal-400 mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400 line-clamp-3">
                {item.synopsis || 'No description available.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anime;

