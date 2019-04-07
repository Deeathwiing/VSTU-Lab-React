import React, { Component } from "react";

class AllItemsAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.state;
  }
  deleteItems = event => {
    const idToDelete = Number(event.target.getAttribute("data-id"));
    this.setState(
      this.props.dispatch({
        type: "DELETE-ITEMS",
        idToDelete: idToDelete
      })
    );
  };
  Item = () => {
    let itemsAdmin = this.state.items.map(item => {
      return (
        <div key={item.id} className="card" data-id={item.id}>
          <img src={item.picture} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">{item.description}</p>
            <p className="card-text">{item.price}</p>
            <p className="card-text">{item.tags}</p>
            <button
              className="btn-danger btn-block btnForDelete"
              data-id={item.id}
              onClick={this.deleteItems}
            >
              Delete item
            </button>
          </div>
        </div>
      );
    });
    return itemsAdmin;
  };
  render() {
    return (
      <div className="card-columns">
        <this.Item />
      </div>
    );
  }
}

export default AllItemsAdmin;
