import React from 'react';
import PropTypes from 'prop-types';

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate() {
    return false;
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // getBase64 = (file, onLoadCallback) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = function () {
  //       resolve(reader.result);
  //     };
  //     reader.onerror = reject;
  //     reader.readAsDataURL(file);
  //   });

  getBase64 = (img) => {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  };

  convertFileToBase64viaFileReader = async () => {
    const file = this.state.picture;
    console.log(file);
    const promise = this.getBase64(file);
    const result = await promise;
    // console.log(result);
    return result;
  };

  handleInputImage = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };

  addItem = async (event) => {
    // event.preventDefault();
    // let picture;
    // if (this.state.picture) {
    //   picture = await this.convertFileToBase64viaFileReader();
    // }
    console.log(this.state.picture);
    this.props.addItems(
      this.state.picture,
      this.state.title,
      this.state.description,
      this.state.price,
      this.state.tags,
      this.state.amount
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
            name="title"
            type="text"
            className="form-control addItemTitle"
            onChange={this.handleInput}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Picture</span>
          </div>
          <input
            accept="image/jpeg,image/png,image/gif"
            name="picture"
            type="file"
            className="form-control addItemPicture"
            onChange={this.handleInputImage}
          />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Price</span>
          </div>
          <input
            name="price"
            type="text"
            className="form-control addItemPrice"
            onChange={this.handleInput}
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
            name="tags"
            type="text"
            className="form-control addItemTag-0"
            onChange={this.handleInput}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
          </div>
          <textarea
            name="description"
            className="form-control addItemDescription"
            onChange={this.handleInput}
          />
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Amount</span>
          </div>
          <input
            type="text"
            name="amount"
            className="form-control addItemAmount"
            onChange={this.handleInput}
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

AddItems.defaultProps = {
  addItems: () => {},
};
