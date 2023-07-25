import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import css from './Feedback.module.css';
import PropTypes from 'prop-types';

class FeedbackComponent extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addStats = score => {
    this.setState(prevState => ({
      ...prevState,
      [score]: prevState[score] + 1,
    }));
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedback = () => {
    const allAnswers = this.state.good + this.state.neutral + this.state.bad;
    return allAnswers
      ? `${((this.state.good / allAnswers) * 100).toFixed(0)}%`
      : `0%`;
  };

  render() {
    return (
      <div>
        <h1 className={css.pageHeader}>
          Did you enjoy your coffee at Expresso?
        </h1>

        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.addStats}
            options={['good', 'neutral', 'bad']}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedback()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

FeedbackComponent.propTypes = {
  countTotalFeedback: PropTypes.func,
  addStats: PropTypes.func,
  countPositiveFeedback: PropTypes.func,
};

export default FeedbackComponent;
