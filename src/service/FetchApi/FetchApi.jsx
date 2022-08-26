const axios = require('axios');

/// FETCH TRENDS
export async function fetchApiTrends() {
  const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
    url: '',
    params: {
      api_key: 'f5f018a555195129a19f56d8b4d0a827',
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}
/// FETCH SEARCH
export async function fetchApiSearch(query) {
  const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/movie',
    url: '',
    params: {
      api_key: 'f5f018a555195129a19f56d8b4d0a827',
      language: 'en-US',
      page: 1,
      include_adult: false,
      query: query,
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}

//FETCH PRIMARYINFO
export async function fetchApiPrimaryInfo(movieId) {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}`,
    url: '',
    params: {
      api_key: 'f5f018a555195129a19f56d8b4d0a827',
      language: 'en-US',
      append_to_response: 'videos',
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}

//FETCH CREDITS
export async function fetchApiCredits(movieId) {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    url: '',
    params: {
      api_key: 'f5f018a555195129a19f56d8b4d0a827',
      language: 'en-US',
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}
//FETCH REVIEWS
export async function fetchApiReviews(movieId) {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    url: '',
    params: {
      api_key: 'f5f018a555195129a19f56d8b4d0a827',
      language: 'en-US',
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}
//FETCH TRAILER

export async function getMovieTrailer(id) {
  const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}/videos`,
    url: '',
    params: {
      api_key: 'f5f018a555195129a19f56d8b4d0a827',
      language: 'en-US',
    },
  });
  try {
    const response = await instance.get();
    return response;
  } catch (error) {
    console.error(error);
  }
}
