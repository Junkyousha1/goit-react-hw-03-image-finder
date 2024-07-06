import React, { Component } from 'react';
import styles from './Item.module.css';
import PropTypes from 'prop-types';

export default class Item extends Component {
  render() {
    return (
      <li className={styles.Item}>
        <img className={styles.ItemImage} src={this.props.smallImgURL} alt={this.props.id} />
      </li>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};