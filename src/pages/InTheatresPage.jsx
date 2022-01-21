import React from 'react';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import MoviesList from '../components/TrendingList/MoviesList';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { today, twoMonthsAgo } from '../helpers/date';
import api from '../api/movies-api';

class InTheatres extends React.Component {
  state = {
    trending: [],
    isLoading: false,
    type: 'movie',
    time: 'inTheatres',
    date: { start: twoMonthsAgo, end: today },
    page: 1,
  };

  componentDidMount() {
    this.fetchTrending();
  }

  fetchTrending = () => {
    const { page, date } = this.state;
    this.setState({ isLoading: true });

    api
      .getInTheatres(date.start, date.end, page)
      .then(results => {
        this.setState(prevState => ({
          trending: [...prevState.trending, ...results],
          page: prevState.page + 1,
        }));
      })
      .catch(error => {
        console.log(error);
        return [];
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { trending, isLoading, time } = this.state;
    const movieList = trending.length > 0 && !isLoading;

    return (
      <div className="container">
        <MoviesList trending={trending} time={time} />

        {movieList && <ScrollButton scrollStepInPx="50" delayInMs="16" />}

        {movieList && <Button onClick={this.fetchTrending} />}

        {isLoading && <Loader isLoading={isLoading} />}
      </div>
    );
  }
}

export default InTheatres;
