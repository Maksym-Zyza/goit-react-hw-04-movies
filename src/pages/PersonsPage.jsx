import React from 'react';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import TrendingPersonsList from '../components/TrendingList/TrendingPersonsList';
import ToolsMenu from '../components/ToolsMenu/ToolsMenu';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import api from '../api/movies-api';

class PersonsPage extends React.Component {
  state = {
    person: [],
    isLoading: false,
    type: 'person',
    time: 'day',
    page: 1,
  };

  componentDidMount() {
    this.fetchPersons();
  }

  componentDidUpdate(_, prevState) {
    const { time, type, person } = this.state;
    console.log(person);

    if (prevState.time !== time && time) {
      this.setState({ person: [] });
      this.fetchPersons();
    }
    if (prevState.type !== type && type) {
      this.setState({ person: [] });
      this.fetchPersons();
    }
  }

  fetchPersons = () => {
    const { type, time, page } = this.state;
    this.setState({ isLoading: true });

    api
      .getMoviesTrending(type, time, page)
      .then(results => {
        this.setState(prevState => ({
          person: [...prevState.person, ...results],
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
  }

  render() {
    const { person, isLoading, time } = this.state;
    const movieList = person.length > 0 && !isLoading;

    return (
      <div className="container">
        <TrendingPersonsList trending={person} time={time} />

        <ToolsMenu changeSelect={this.changeSelect.bind(this)} />

        {movieList && <ScrollButton scrollStepInPx="50" delayInMs="16" />}

        {movieList && <Button onClick={this.fetchPersons} />}

        {isLoading && <Loader isLoading={isLoading} />}
      </div>
    );
  }
}

export default PersonsPage;
