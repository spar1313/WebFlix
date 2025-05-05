import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MediaDetail = () => {
  const { media_type, id } = useParams();
  const navigate = useNavigate();
  const [media, setMedia] = useState(null);
  const [cast, setCast] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      const mediaRes = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setMedia(mediaRes.data);

      const castRes = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setCast(castRes.data.cast.slice(0, 10)); // Top 10 cast

      const recRes = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      setRecommendations(recRes.data.results.slice(0, 6)); // Top 6 recommendations
    };

    fetchMedia();
  }, [media_type, id]);

  if (!media) return <div className="text-white p-4 pt-16">Loading...</div>;

  return (
    <div className="text-white p-4 pt-16">
      {/* Media Content */}
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          alt={media.title || media.name}
          className="rounded-xl w-[300px]"
        />
        <div>
          <h1 className="text-4xl font-bold mt-2">
            {media.title || media.name} ({(media.release_date || media.first_air_date || '').split('-')[0]})
          </h1>
          <p className="mt-2 text-sm italic">{media.tagline}</p>
          <p className="mt-4 text-base leading-relaxed">{media.overview}</p>

          {media.genres && (
            <p className="mt-4">
              <strong>Genres:</strong> {media.genres.map((g) => g.name).join(', ')}
            </p>
          )}
          {media.runtime && (
            <p><strong>Duration:</strong> {media.runtime} min</p>
          )}
          {media.vote_average && (
            <p><strong>Rating:</strong> ⭐ {media.vote_average.toFixed(1)} / 10</p>
          )}
          {media.original_language && (
            <p><strong>Language:</strong> {media.original_language.toUpperCase()}</p>
          )}
          {media.status && (
            <p><strong>Status:</strong> {media.status}</p>
          )}
          {media.release_date && (
            <p><strong>Release Date:</strong> {media.release_date}</p>
          )}
        </div>
      </div>

      {/* Cast Section */}
      {cast.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
          <div className="flex gap-4 overflow-x-auto">
            {cast.map((actor) => (
              <div key={actor.id} className="min-w-[100px] text-center">
                <img
                  src={actor.profile_path ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` : '/no-image.jpg'}
                  alt={actor.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
                />
                <p className="text-sm">{actor.name}</p>
                <p className="text-xs text-gray-400">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      {recommendations.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Recommended</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => navigate(`/details/${media_type}/${rec.id}`)}
              >
                <img
                  src={rec.poster_path ? `https://image.tmdb.org/t/p/w300${rec.poster_path}` : '/no-image.jpg'}
                  alt={rec.title || rec.name}
                  className="rounded-lg"
                />
                <p className="text-sm mt-2">{rec.title || rec.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaDetail;
