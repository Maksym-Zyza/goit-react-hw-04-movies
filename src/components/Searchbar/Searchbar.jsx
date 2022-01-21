import React from 'react';
import { ReactComponent as SearchLogo } from '../Icons/Search.svg';
import st from './Searchbar.module.scss';
import { text } from '../../helpers/text';

class Searchbar extends React.Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // prop to MoviesPage
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;

    return (
      <header className={st.Searchbar}>
        <form onSubmit={this.handleSubmit} className={st.SearchForm}>
          <button type="submit" className={st.SearchForm_button}>
            <SearchLogo className={st.searchLogo} />
          </button>

          <input
            className={st.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder={text.SearchMovies}
            value={search}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
