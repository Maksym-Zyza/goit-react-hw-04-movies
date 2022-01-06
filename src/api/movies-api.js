import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '523a15ded98cd05fab36993344058e43';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

// список популярных фильмов на сегодня для создания коллекции на главной странице
const getMoviesTrending = async (type, time) => {
  try {
    const url = { url: `trending/${type}/${time}` };
    const { data } = await axios(url);
    return data.results;
  } catch (error) {
    alert(error);
    return [];
  }
};

// поиск кинофильма по ключевому слову на странице фильмов
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

// запрос полной информации о фильме для страницы кинофильма
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

// запрос информации о актёрском составе для страницы кинофильма
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

// Какие фильмы идут в кинотеатрах?
// URL: /discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22

// Какие фильмы самые популярные?
// URL: /discover/movie?sort_by=popularity.desc

// Какие фильмы имеют самый высокий рейтинг R?
// URL: /discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc

// Какие детские фильмы самые популярные?
// URL: /discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc

// Какие лучшие фильмы 2010 года?
// URL: /discover/movie?primary_release_year=2010&sort_by=vote_average.desc

// Какие лучшие драмы вышли в этом году?
// URL: /discover/movie?With_genres=18&primary_release_year=2014

// Какие научно-фантастические фильмы, в которых снимался Том Круз, получили самые высокие оценки?
// URL: /discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc

// Какие комедии Уилла Феррелла самые кассовые?
// URL: /discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc

// Снимались ли Брэд Питт и Эдвард Нортон вместе в кино?
// URL: /discover/movie?with_people=287,819&sort_by=vote_average.desc

// Дэвид Финчер когда-нибудь работал с Руни Мара?
// URL: /discover/movie?with_people=108916,7467&sort_by=popularity.desc

// Какие драмы самые лучшие?
// URL: /discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10

// Какие фильмы Лиама Нисона получили самый высокий рейтинг "R"?
// URL: /discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896

// ===========

const api = {
  getMoviesTrending,
  getSerchMovies,
  getMovieDetails,
  getMovieCredits,
  getMoviesReviews,
};

export default api;
