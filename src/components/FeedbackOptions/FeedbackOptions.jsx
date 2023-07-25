import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <ul className={css.btnList}>
        {options.map(option => (
          <li>
            <button
              className={css.optionBtn}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.array,
};
