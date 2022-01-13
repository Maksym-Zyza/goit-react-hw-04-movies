import React from 'react';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import TrendingPersonsList from '../components/TrendingList/TrendingPersonsList';
import ToolsMenu from '../components/ToolsMenu/ToolsMenu';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import api from '../api/movies-api';

class PersonsPage extends React.Component {
  state = {
    trending: [],
    isLoading: false,
    type: 'person',
    time: 'day',
    page: 1,
  };

  componentDidMount() {
    this.fetchTrending();
  }

  componentDidUpdate(_, prevState) {
    const { time, type } = this.state;

    if (prevState.time !== time && time) {
      this.setState({ trending: [] });
      this.fetchTrending();
    }
    if (prevState.type !== type && type) {
      this.setState({ trending: [] });
      this.fetchTrending();
    }
  }

  fetchTrending = () => {
    const { type, time, page } = this.state;
    this.setState({ isLoading: true });

    api
      .getMoviesTrending(type, time, page)
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
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      page: 1,
    });
  }

  render() {
    const { trending, isLoading, time, type } = this.state;
    const movieList = trending.length > 0 && !isLoading;

    return (
      <div className="container">
        <TrendingPersonsList trending={trending} time={time} />

        <ToolsMenu
          time={time}
          type={type}
          changeSelect={this.changeSelect.bind(this)}
        />

        {movieList && <ScrollButton scrollStepInPx="50" delayInMs="16" />}

        {movieList && <Button onClick={this.fetchTrending} />}

        {isLoading && <Loader isLoading={isLoading} />}
      </div>
    );
  }
}

export default PersonsPage;