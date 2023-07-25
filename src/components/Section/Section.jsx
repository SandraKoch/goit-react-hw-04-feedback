import { Component } from 'react';
import css from './Section.module.css';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <>
        <h2 className={css.sectionTitle}>{title}</h2>
        {children}
      </>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
