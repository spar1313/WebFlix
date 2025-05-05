const key='ed57220d82d15d1dc74837aba5d6de6e'

 // replace with your actual key

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

  // Extended category mapping for Cards
  all: {
    title: 'All Movies',
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  },
  bollywood: {
    title: 'Bollywood Movies',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=bollywood&page=1&include_adult=false`,
  },
  hollywood: {
    title: 'Hollywood Movies',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=hollywood&page=1&include_adult=false`,
  },
  korean: {
    title: 'Korean Drama',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=korean&page=1&include_adult=false`,
  },
  news: {
    title: 'News',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=news&page=1&include_adult=false`,
  },
  sports: {
    title: 'Sports',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=sports&page=1&include_adult=false`,
  },
  cartoons: {
    title: 'Cartoons',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=cartoon&page=1&include_adult=false`,
  },
  tv: {
    title: 'TV Serials',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=tv&page=1&include_adult=false`,
  },
  anime: {
    title: 'Upcoming Anime',
    url: `https://api.jikan.moe/v4/seasons/upcoming`, // Jikan API for upcoming anime
  },

  series: {
    title: 'Series',
    url: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=series&page=1&include_adult=false`,
  },
};

export default requests;
