const key = "4dba1716e1ae4aa965bd3d960c1c9f64";

export const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}&language=en-US&page=2`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
