import React from "react";
import $ from "jquery";

const Item = props => {
  function deleteItems(btn) {
    const idToDelete = Number(btn.target.getAttribute("data-id"));
    props.deleteItems(idToDelete);
  }
  let itemsAdmin = props.state.items.map(item => {
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
            onClick={deleteItems}
          >
            Delete item
          </button>
        </div>
      </div>
    );
  });
  return itemsAdmin;
};

const AllItemsAdmin = props => {
  return (
    <div className="card-columns">
      <Item state={props.state} deleteItems={props.deleteItems} />
    </div>
  );
};

export default AllItemsAdmin;
