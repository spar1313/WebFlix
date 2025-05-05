import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  const getConsistentImage = () => {
    if (item?.poster_path) {
      return `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    }
    if (item?.images?.jpg?.image_url) {
      return item.images.jpg.image_url;
    }
    return null;
  };

  const imageUrl = getConsistentImage();
  const title = item?.title || item?.name;
  const movieId = item.id || item.mal_id;

  const saveShow = async () => {
    if (!user?.email) {
      alert('Please log in to save a movie');
      return;
    }

    const userDocRef = doc(db, 'users', user.email);

    try {
      const userSnap = await getDoc(userDocRef);

      // If the user doc doesn't exist yet, create it with the current movie
      if (!userSnap.exists()) {
        await setDoc(userDocRef, {
          savedShows: [{
            id: movieId,
            title,
            img: imageUrl,
          }]
        });
        setLike(true);
        return;
      }

      const currentData = userSnap.data();
      const existing = currentData.savedShows || [];

      // Check if movie is already saved
      const alreadyExists = existing.some(show => show.id === movieId);
      if (alreadyExists) {
        alert('Already added to your list');
        return;
      }

      // Add the new show
      await updateDoc(userDocRef, {
        savedShows: arrayUnion({
          id: movieId,
          title,
          img: imageUrl,
        })
      });
      setLike(true);
    } catch (error) {
      console.error('Error saving show:', error);
    }
  };

  if (!imageUrl) return null;

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img className='w-full h-auto block' src={imageUrl} alt={title} />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
