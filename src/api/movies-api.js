import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '523a15ded98cd05fab36993344058e43';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: window.localStorage?.getItem('language'),
  page: 1,
};

// список популярных фильмов
const getMoviesTrending = async (type, time, page) => {
  try {
    const url = { url: `trending/${type}/${time}`, params: { page } };
    const { data } = await axios(url);
    return data.results;
  } catch (error) {
    alert(error);
    return [];
  }
};

// поиск кинофильма по ключевому слову
async function getSerchMovies(query, page) {
  try {
    const url = { url: 'search/movie', params: { query, page } };
    const response = await axios(url);
    return response;
  } catch (error) {
    alert(error);
    return [];
  }
}

getSerchMovies.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

// запрос детальной информации о фильме
async function getMovieDetails(movie_id) {
  try {
    const url = { url: `movie/${movie_id}` };
    const { data } = await axios(url, movie_id);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

async function getMovieVideo(movieId) {
  try {
    const url = { url: `movie/${movieId}/videos` };
    const { data } = await axios(url, movieId);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос информации о актёрском составе
async function getMovieCredits(movie_id) {
  try {
    const url = { url: `movie/${movie_id}/credits` };
    const response = axios(url, movie_id);
    return response;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос обзоров для страницы кинофильма
async function getMoviesReviews(movie_id) {
  try {
    const url = { url: `movie/${movie_id}/reviews` };
    const response = axios(url, movie_id);
    return response;
  } catch (error) {
    alert(error);
    return [];
  }
}

// Get the list of popular people. Updates daily.
async function getPersons(page) {
  try {
    const url = { url: `person/popular`, params: { page } };
    const { data } = await axios(url);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// Get the images for a person.
async function getPersonPopular() {
  try {
    const url = { url: `person/popular` };
    const { data } = await axios(url);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос детальной информации для страницы персон
async function getPersonImages(person_id) {
  try {
    const url = { url: `person/${person_id}/images` };
    const { data } = await axios(url, person_id);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос детальной информации для страницы персон
async function getPersonDetails(person_id) {
  try {
    const url = { url: `person/${person_id}` };
    const { data } = await axios(url, person_id);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// запрос детальной информации для страницы TV shows
async function getTvDetails(movie_id) {
  try {
    const url = { url: `tv/${movie_id}` };
    const { data } = await axios(url, movie_id);
    return data;
  } catch (error) {
    alert(error);
    return [];
  }
}

// What movies are in theatres?
// URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22
const getInTheatres = async (startDate, endDate, page) => {
  try {
    const url = {
      url: `discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`,
      params: { page },
    };
    const { data } = await axios(url);
    return data.results;
  } catch (error) {
    alert(error);
    return [];
  }
};

// Most popular movies
// URL :/discover/movie?sort_by=popularity.desc
const getMostPopular = async page => {
  try {
    const url = {
      url: `discover/movie?sort_by=popularity.desc`,
      params: { page },
    };
    const { data } = await axios(url);
    return data.results;
  } catch (error) {
    alert(error);
    return [];
  }
};

const api = {
  getMoviesTrending,
  getSerchMovies,
  getMovieDetails,
  getMovieVideo,
  getPersons,
  getPersonPopular,
  getPersonImages,
  getPersonDetails,
  getTvDetails,
  getMovieCredits,
  getMoviesReviews,
  getInTheatres,
  getMostPopular,
};

export default api;

// Які фільми мають найвищий рейтинг R?
// URL :/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

// Які найпопулярніші дитячі фільми?
// URL :/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

// Які найкращі фільми 2010 року?
// URL :/discover/movie?primary_release_year=2010&sort_by=vote_average.desc

// Які найкращі драми вийшли цього року?
// URL :/discover/movie?with_genres=18&primary_release_year=2014

// Які науково-фантастичні фільми з найвищим рейтингом, в яких знімався Том Круз?
// URL :/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

// Які комедії Вілла Феррелла є найкасовішими?
// URL :/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

// Бред Пітт і Едвард Нортон коли-небудь знімалися разом у кіно?
// URL :/discover/movie?with_people=287,819&sort_by=vote_average.desc

// Девід Фінчер коли-небудь працював з Руні Марою?
// URL :/discover/movie?with_people=108916,7467&sort_by=popularity.desc

// Які драми найкращі?
// URL :/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10

// Які фільми Ліама Нісона з найвищим рейтингом «R»?
// URL :/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896
