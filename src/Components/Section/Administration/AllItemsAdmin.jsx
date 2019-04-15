import React, { Component } from 'react';

class AllItemsAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = { items: this.props.state };
  }

  static getDerivedStateFromProps(props, state) {
    return { items: props.state };
  }

  render() {
    return (
      <div className="card-columns">
        {this.state.items.map(item => (
          <div key={item.id} className="card" data-id={item.id}>
            <img src={item.picture} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
              <p className="card-text">{item.tags}</p>
              <button
                type="button"
                className="btn-danger btn-block btnForDelete"
                data-id={item.id}
                onClick={this.props.deleteItems}
              >
                Delete item
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AllItemsAdmin;
