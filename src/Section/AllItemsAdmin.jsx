import React from "react";
import $ from "jquery";

const Item = props => {
  let itemsAdmin = props.state.map(item => {
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
  function deleteItems() {
    $(".card-columns").on("click", ".btnForDelete", function() {
      const idToDelete = Number($(this).attr("data-id"));

      let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];

      items = items.filter(item => {
        if (item.id !== idToDelete) {
          return item;
        } else return false;
      });

      localStorage.setItem("items", JSON.stringify(items));

      $(".card-columns")
        .find(`[data-id=${idToDelete}]`)
        .remove();
      return;
    });
    return;
  }
  $(document).ready(() => {
    deleteItems();
  });
  return (
    <div className="card-columns">
      <Item state={props.state} />
    </div>
  );
};

export default AllItemsAdmin;
