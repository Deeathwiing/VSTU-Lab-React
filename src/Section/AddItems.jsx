import React from "react";
import $ from "jquery";

const AddItems = props => {
  function addItems() {
    const picture = $(".addItemPicture").val();
    const title = $(".addItemTitle").val();
    const description = $(".addItemDescription").val();
    const price = $(".addItemPrice").val() + " $";
    const tags = [];
    const rating = [];
    for (let i = 0; i < 3; i++) {
      tags[i] = "#" + $(`.addItemTag-${i}`).val() + " ";
    }
    let actionCreator = () => {
      return {
        type: "ADD-ITEMS",
        picture: picture,
        title: title,
        description: description,
        price: price,
        tags: tags,
        rating: rating
      };
    };
    props.dispatch(actionCreator());
  }

  return (
    <div className="container-fluid">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Title</span>
        </div>
        <input type="text" className="form-control addItemTitle" />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Picture (url)</span>
        </div>
        <input type="text" className="form-control addItemPicture" />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Price</span>
        </div>
        <input type="text" className="form-control addItemPrice" />
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
          aria-label="First name"
          className="form-control addItemTag-0"
        />
        <input
          type="text"
          aria-label="Last name"
          className="form-control addItemTag-1"
        />
        <input
          type="text"
          aria-label="Last name"
          className="form-control addItemTag-2"
        />
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Description</span>
        </div>
        <textarea className="form-control addItemDescription" />
      </div>

      <div className="justify-content-center d-flex">
        <button
          type="button"
          onClick={addItems}
          className="btn btn-primary mt-2"
        >
          Upload item
        </button>
      </div>
    </div>
  );
};

export default AddItems;
