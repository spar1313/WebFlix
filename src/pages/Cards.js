import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();

  const handleSelect = (category) => {
    navigate('/home', { state: { category } });
  };

  return (
    <div className="w-full bg-background py-[10rem] px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

        {/* Bollywood */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://m.media-amazon.com/images/I/C1qmG3fnRpS.png" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Bollywood Movies</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 350</p>
          </div>
          <button
            onClick={() => handleSelect('bollywood')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* Hollywood */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://bingeddata.s3.amazonaws.com/uploads/2021/06/Best-50-Hollywood-Movies-For-You-To-Stream-On-SonyLIV.jpg" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Hollywood Movies</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 300</p>
          </div>
          <button
            onClick={() => handleSelect('hollywood')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* Korean Drama */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://hips.hearstapps.com/hmg-prod/images/korean-drama-series-1654114746.png?crop=1.00xw:1.00xh;0,0&resize=1200:*" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Korean Drama</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 200</p>
          </div>
          <button
            onClick={() => handleSelect('korean')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* News */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.freekaamaal.com/post_images/1646999378.webp" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">News</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 250</p>
          </div>
          <button
            onClick={() => handleSelect('news')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* Sports */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://i.pinimg.com/474x/8b/ea/8b/8bea8b6a9cd953a8fa88b4b1eee6b4a1.jpg" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Sports</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 100</p>
          </div>
          <button
            onClick={() => handleSelect('sports')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* Cartoons */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://www.animationxpress.com/wp-content/uploads/2021/01/kids-channels.jpg" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Cartoons</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 100</p>
          </div>
          <button
            onClick={() => handleSelect('cartoons')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* TV Serials */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://3.bp.blogspot.com/-ch6TpqFWs4w/VtW42Rw6RzI/AAAAAAAASpo/OfFKeIT24E4/s1600/Hindi%2BTV%2BSerials%2Bon%2BSisters.jpg" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">TV Serials</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 150</p>
          </div>
          <button
            onClick={() => handleSelect('tv')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* Anime */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://lh6.googleusercontent.com/nW71R5Df6cRa8ssO52C8rlDNlxNbDdSLItaPVT1w-V-Ng94_eu1d1ImAnc0zci15vuNbNM7s8_Jr4e8b5ik1Hyzk_70GojxQ7NNulupqd9VzS_0YWqPzDD-EjrF-4RBVJTQfmArW" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Anime</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 150</p>
          </div>
          <button
            onClick={() => navigate('/anime')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

        {/* Series */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border-2 border-primary">
          <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://3.bp.blogspot.com/-ch6TpqFWs4w/VtW42Rw6RzI/AAAAAAAASpo/OfFKeIT24E4/s1600/Hindi%2BTV%2BSerials%2Bon%2BSisters.jpg" alt="/" />
          <h2 className="text-4xl font-bold text-center pt-8">Series</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Validity - 1 year</p>
            <p className="py-2 border-b mx-8">Rs. 200</p>
          </div>
          <button
            onClick={() => handleSelect('series')}
            className="bg-primary w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-accent transition-all duration-300"
          >
            Get it
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cards;
