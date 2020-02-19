/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

class AllItemsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTo: 0,
      itemsAmount: 3,
      page: 1,
      items: props.state.items,
    };
  }

  async componentDidMount() {
    await this.setState(state => ({
      page: state.items.length / state.itemsAmount || 1,
    }));

    if (this.state.items.length < 1) {
      await this.props.getProducts(this.state.itemsAmount, this.state.page);
      await this.setState(state => ({
        page: state.items.length / state.itemsAmount,
      }));
    } else {
      await this.props.getProducts(
        this.state.itemsAmount,

        this.state.page
      );
      await this.setState(state => ({
        page: state.items.length / state.itemsAmount,
      }));
    }

    await window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    return {
      items: props.state,
      page: props.state.length / state.itemsAmount || 1,
    };
  }

  handleScroll = async () => {
    if (
      window.innerHeight + window.scrollY
      >= document.body.offsetHeight - 100
    ) {
      if (this.state.scrollTo < document.body.offsetHeight) {
        const newPage = this.state.page + 1;
        this.setState((state, props) => ({
          scrollTo: Number(document.body.offsetHeight),
          page: newPage,
        }));

        await this.props.getProducts(this.state.itemsAmount, newPage);
      }
    }
  };

  saveItem = async () => {
    this.props.updateItem(
      this.state.editId,
      this.state.picture,
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
    const editId = e.target.getAttribute('data-id');

    const editItem = this.state.items.find((item) => {
      if (Number(item.id) === Number(editId)) {
        console.log(editId);
        return true;
      }
      return false;
    });

    this.setState(() => ({
      editId,
      amount: editItem.amount,
      title: editItem.title,
      description: editItem.description,
      price: editItem.amount,
      tags: editItem.amount,
    }));
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
          if (Number(item.id) === Number(this.state.editId)) {
            return (
              <div key={item.id} className="card" data-id={item.id}>
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
                    data-id={item.id}
                    onClick={this.saveItem}
                  >
                    Save
                  </button>
                </div>
              </div>
            );
          }
          return (
            <div key={item.id} className="card" data-id={item.id}>
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
                <p className="card-text">{item.tags[0].text}</p>
                <p className="card-text">{item.lastUpdate}</p>
                <p className="card-text">
                  Rating amount: {Number(item.amountOfRatings)}
                </p>
                <button
                  type="button"
                  className="btn-danger btn-block btnForDelete"
                  data-id={item.id}
                  onClick={this.props.deleteItems}
                >
                  Delete item
                </button>
                <button
                  type="button"
                  className="btn-danger btn-block btnForUpdate"
                  data-id={item.id}
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
