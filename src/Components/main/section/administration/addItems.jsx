/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handlePictureChange = (e) => {
    this.setState({ picture: e.target.value });
  };

  handlePriceChange = (e) => {
    this.setState({ price: e.target.value });
  };

  handleTagsChange = (e) => {
    this.setState({ tags: e.target.value });
  };

  handledescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  };

  addItem = (event) => {
    event.preventDefault();
    this.props.addItems(
      this.state.picture,
      this.state.title,
      this.state.description,
      this.state.price,
      this.state.tags,
      this.state.rating
    );
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Title</span>
          </div>
          <input
            type="text"
            className="form-control addItemTitle"
            onChange={this.handleTitleChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Picture (url)</span>
          </div>
          <input
            type="text"
            className="form-control addItemPicture"
            onChange={this.handlePictureChange}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Price</span>
          </div>
          <input
            type="text"
            className="form-control addItemPrice"
            onChange={this.handlePriceChange}
          />
          <div className="input-group-append">
            <span className="input-group-text">$</span>
          </div>
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">Tags</span>
          </div>
          <input
            type="text"
            className="form-control addItemTag-0"
            onChange={this.handleTagsChange}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea
            className="form-control addItemDescription"
            onChange={this.handledescriptionChange}
          />
        </div>

        <div className="justify-content-center d-flex">
          <button
            type="submit"
            onClick={this.addItem}
            className="btn btn-primary mt-2"
          >
            Upload item
          </button>
        </div>
      </div>
    );
  }
}

export default AddItems;

AddItems.propTypes = {
  addItems: PropTypes.func,
};
