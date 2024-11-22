import React, { useEffect, useState } from 'react';

function RandomAnimeAvatar() {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetchNewAvatar();
  }, []);

  const fetchNewAvatar = async () => {
    try {
      const response = await fetch('https://nekos.best/api/v2/neko');
      const data = await response.json();
      setAvatarUrl(data.results[0].url); // Set the image URL from the API response
    } catch (error) {
      console.error("Error fetching the avatar:", error);
    }
  };

  return (
    <div className="flex items-center  h-[90vh] gap-4 rounded-md  ">
      <div className="rounded w-[40vw] h-full  overflow-y-scroll">{avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Random Anime Avatar"
          className=" object-scale-down"
        />
      ) : (
        <p>Loading...</p>
      )}
      </div>
      <div className="flex flex-col">
      <button
        onClick={fetchNewAvatar}
        className="mt-4 bg-rose-800 hover:bg-rose-700 z-10 text-white font-bold py-2 px-4 rounded"
      >
        Get New Wallpaper
      </button>
      {avatarUrl && (
        <a
          href={avatarUrl} // Avatar image URL
          download="random-anime-avatar.png" // Suggested file name for download
          className="mt-4 bg-rose-900 text-center hover:bg-rose-600 z-10 text-white font-bold py-2 px-4 rounded"
          target="_blank"
        >
          Download 
        </a>
      )}
      </div>
    </div>
  );
}

export default RandomAnimeAvatar;
