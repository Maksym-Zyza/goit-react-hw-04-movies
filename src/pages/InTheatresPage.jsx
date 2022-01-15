import React from 'react';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import MoviesList from '../components/TrendingList/MoviesList';
import ToolsMenu from '../components/ToolsMenu/ToolsMenu';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import { today } from '../helper/date';
import api from '../api/movies-api';

class InTheatres extends React.Component {
  state = {
    trending: [],
    isLoading: false,
    type: 'movie',
    time: today,
    page: 1,
  };

  componentDidMount() {
    this.fetchTrending();
  }

  componentDidUpdate(_, prevState) {
    const { time } = this.state;

    if (prevState.time !== time && time) {
      this.setState({ trending: [] });
      this.fetchTrending();
    }
  }

  fetchTrending = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });

    api
      .getInTheatres('2021-11-15', '2022-01-15', page)
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

  changeSelect(e) {
    this.setState({ time: e.target.dataset.value, page: 1 });
    console.log('time>>', this.state.time);
  }

  render() {
    const { trending, isLoading, time } = this.state;
    const movieList = trending.length > 0 && !isLoading;

    return (
      <div className="container">
        <MoviesList trending={trending} time={time} />

        <ToolsMenu changeSelect={this.changeSelect.bind(this)} />

        {movieList && <ScrollButton scrollStepInPx="50" delayInMs="16" />}

        {movieList && <Button onClick={this.fetchTrending} />}

        {isLoading && <Loader isLoading={isLoading} />}
      </div>
    );
  }
}

export default InTheatres;
