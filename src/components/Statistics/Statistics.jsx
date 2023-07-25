import React, { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <ul className={css.feedbackList}>
          <li>
            Good : <span className={css.result}>{good}</span>
          </li>
          <li>
            Neutral: <span className={css.result}>{neutral}</span>
          </li>
          <li>
            Bad: <span className={css.result}>{bad}</span>
          </li>
          <li>
            A total of <span className={css.result}>{total}</span> customers'
            feedbacks were left
          </li>
          <li>
            Positive feedback:{' '}
            <span className={css.result}>{positivePercentage}</span>
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
