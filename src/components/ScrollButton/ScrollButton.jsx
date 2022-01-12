import React from 'react';
import style from './ScrollButton.module.scss';
import { ReactComponent as UpArrow } from '../Icons/UpArrow.svg';

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs,
    );
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <button
        title="Back to top"
        className={style.scroll}
        onClick={() => {
          this.scrollToTop();
        }}
      >
        <UpArrow className={style.arrowUp} />
      </button>
    );
  }
}

export default ScrollButton;
