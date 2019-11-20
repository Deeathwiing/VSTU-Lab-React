/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

class AllItemsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.state, scrollTo: 0, itemsAmount: 0 };
  }

  componentDidMount() {
    if (this.state.items.length < 15) {
      this.props.init(0);
    } else {
      this.setState(state => ({ itemsAmount: state.items.length - 15 }));
    }
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(props, state) {
    return { items: props.state };
  }

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY
      >= document.body.offsetHeight - 100
    ) {
      if (this.state.scrollTo < document.body.offsetHeight) {
        this.setState((state, props) => ({
          scrollTo: Number(document.body.offsetHeight),
          itemsAmount: Number(state.itemsAmount + 15),
        }));

        return this.props.init(this.state.itemsAmount);
      }
    }
  };

  saveItem = async () => {
    let picture = null;
    if (this.state.picture) {
      picture = await this.convertFileToBase64viaFileReader();
    }
    this.props.updateItem(
      this.state.editId,
      picture,
      this.state.title,
      this.state.description,
      this.state.price,
      this.state.tags,
      this.state.amount
    );
    this.setState(() => ({
      editId: '',
      picture: '',
      title: '',
      description: '',
      price: '',
      tags: '',
      amount: '',
    }));
  };

  editItem = async (e) => {
    e.persist();

    this.setState(() => ({
      editId: e.target.getAttribute('data-id'),
    }));
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getBase64 = (file, onLoadCallback) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  convertFileToBase64viaFileReader = async () => {
    const file = this.state.picture;
    const promise = this.getBase64(file);
    const result = await promise;
    // console.log(result);
    return result;
    // const fileId = `${file.name}${file.size}${+file.lastModifiedDate}`;
    /* const pictureBlob = new Blob([file], {
      type: `${file.type}`,
    }); */
  };

  handleInputImage = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };

  // eslint-disable-next-line react/sort-comp
  // lastElement = this.state.items[this.state.items.length - 1];

  render() {
    return (
      <div className="card-columns">
        {this.state.items.map((item) => {
          if (item._id === this.state.editId) {
            return (
              <div key={item._id} className="card" data-id={item._id}>
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
                <div className="card-body">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Title</span>
                    </div>
                    <input
                      value={this.state.title}
                      name="title"
                      type="text"
                      className="form-control addItemTitle"
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Description</span>
                    </div>
                    <textarea
                      value={this.state.description}
                      name="description"
                      className="form-control addItemDescription"
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Price</span>
                    </div>
                    <input
                      value={this.state.price}
                      name="price"
                      type="text"
                      className="form-control addItemPrice"
                      onChange={this.handleInput}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">$</span>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Amount</span>
                    </div>
                    <input
                      value={this.state.amount}
                      type="text"
                      name="amount"
                      className="form-control addItemAmount"
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Tags</span>
                    </div>
                    <input
                      value={this.state.tags}
                      name="tags"
                      type="text"
                      className="form-control addItemTag-0"
                      onChange={this.handleInput}
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-danger btn-block btnForSave"
                    data-id={item._id}
                    onClick={this.saveItem}
                  >
                    Save
                  </button>
                </div>
              </div>
            );
          }
          return (
            <div key={item._id} className="card" data-id={item._id}>
              <img
                src={item.picture}
                className="card-img-top"
                alt={item.title}
              />
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <p className="card-text">{item.amount}</p>
                <p className="card-text">{item.tags}</p>
                <p className="card-text">{item.lastUpdate}</p>
                <p className="card-text">
                  Rating amount: {Number(item.ratingAmount)}
                </p>
                <button
                  type="button"
                  className="btn-danger btn-block btnForDelete"
                  data-id={item._id}
                  onClick={this.props.deleteItems}
                >
                  Delete item
                </button>
                <button
                  type="button"
                  className="btn-danger btn-block btnForUpdate"
                  data-id={item._id}
                  onClick={this.editItem}
                >
                  Edit item
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllItemsAdmin;

AllItemsAdmin.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  deleteItems: PropTypes.func,
};

AllItemsAdmin.defaultProps = {
  state: [],
  deleteItems: () => {},
};
