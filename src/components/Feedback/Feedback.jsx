import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const FeedbackComponent = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addStats = score => {
    switch (score) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedback = () => {
    const allAnswers = good + neutral + bad;
    return allAnswers ? `${((good / allAnswers) * 100).toFixed(0)}%` : `0%`;
  };
  return (
    <div>
      <h1 className={css.pageHeader}>Did you enjoy your coffee at Expresso?</h1>

      <Section title="Please leave your feedback">
        <FeedbackOptions
          onLeaveFeedback={score => addStats(score)}
          options={['good', 'neutral', 'bad']}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedback()}
        ></Statistics>
      </Section>
    </div>
  );
};

FeedbackComponent.propTypes = {
  countTotalFeedback: PropTypes.func,
  addStats: PropTypes.func,
  countPositiveFeedback: PropTypes.func,
};

export default FeedbackComponent;
