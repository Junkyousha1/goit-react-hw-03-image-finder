import React, { Component } from 'react';
import styles from './Gallery.module.css';
import Item from 'components/Item/Item';
import Modal from 'components/Modal/Modal';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class Gallery extends Component {
  state = {
    showModal: false,
    bigPic: null,
  };

  componentDidMount() {
    document.addEventListener('click', e => {
      if (e.target.nodeName !== 'IMG') {
        this.setState({ showModal: false });
        return;
      } else {
        let picture = this.props.images.filter(obj => {
          return obj.id === parseInt(e.target.alt);
        });
        if (picture && picture.length > 0) {
          this.setState({ bigPic: picture[0].largeImageURL });
        }
      }
    });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal, bigPic } = this.state;
    return (
      <>
        <ul className={styles.gallery} onClick={this.toggleModal}>
          {this.props.images.map(img => {
            return (
              <Item key={nanoid()} smallImgURL={img.webformatURL} id={img.id} />
            );
          })}
        </ul>
        {showModal && bigPic && (
          <Modal onClose={this.toggleModal} pic={bigPic} />
        )}
      </>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
