const english = {
  // Routes
  Home: 'Home',
  InTheatres: 'In theatres',
  SearchMovies: 'Search movies',
  Persons: 'Persons',
  TvShows: 'TV shows',
  MovieDetails: 'MovieDetails',
  PersonDetails: 'PersonDetails',
  TvShowsDetails: 'TvShowsDetails',
  // Pages
  TitleMovies: 'Today trending movies',
  WeekMovies: 'Trending movies of the week',
  TitleTrending: 'Today trending TV shows',
  WeekTrending: 'Trending TV shows of the week',
  TitleTheatres: 'Movies in theatres',
  TitlePersons: 'Today trending persons',
  WeekPersons: 'Trending persons of the week',
  Release: 'Release',
  Overview: 'Overview',
  Poster: 'Poster',
  Popularity: 'Popularity',
  Rating: 'Rating',
  Count: 'Vote count',
  Genres: 'Genres',
  Cast: 'Cast',
  Reviews: 'Reviews',
  Birthday: 'Birthday',
  PlaceOfBirth: 'Place of birth',
  Biography: 'Biography',
  Department: 'Department',
  Homepage: 'Homepage',
  NotFound: 'not found',
  Back: 'Back',
  Theme: 'Theme',
  Language: 'Language',
};

const ukreine = {
  // Routes
  Home: 'Головна',
  InTheatres: 'У кіно',
  SearchMovies: 'Пошук фільмів',
  Persons: 'Люди',
  TvShows: 'Телешоу',
  MovieDetails: 'Про фільм',
  PersonDetails: 'Деталі про людину',
  TvShowsDetails: 'Деталі телешоу',
  // Pages
  TitleMovies: 'Сьогодні популярні фільми',
  WeekMovies: 'Популярні фільми цього тижня',
  TitleTrending: 'Сьогодні популярні телешоу',
  WeekTrending: 'Популярні телешоу цього тижня',
  TitleTheatres: 'Фільми в кіно',
  TitlePersons: 'Сьогодні популярні особи',
  WeekPersons: 'Популярні особи тижня',
  Release: 'Реліз',
  Overview: 'Огляд',
  Poster: 'Постер',
  Popularity: 'Популярність',
  Rating: 'Рейтинг',
  Count: 'Підрахунок голосів',
  Genres: '«Жанри»',
  Cast: 'Актори',
  Reviews: 'Відгуки',
  Birthday: 'День народження',
  PlaceOfBirth: 'Місце народження',
  Biography: 'Біографія',
  Department: 'Відділ',
  Homepage: 'Домашня сторінка',
  NotFound: 'не знайдено',
  Back: 'Назад',
  Theme: 'Tема',
  Language: 'Мова',
};

const language = window.localStorage?.getItem('language');

export const text = language === 'en-US' ? english : ukreine;
