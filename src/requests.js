const key = process.env.REACT_APP_TMDB_KEY;

export const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  horror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult=false`,
  comedy: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  romance: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=romance&page=1&include_adult=false`,
  drama: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=drama&page=1&include_adult=false`,
  action: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=action&page=1&include_adult=false`,
  crime: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=crime&page=1&include_adult=false`,
  western: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=western&page=1&include_adult=false`,
};
