import $ from "jquery";
import "popper.js";
import "jquery";
import "popper.js";

export function addItems() {
  class Item {
    constructor(id, picture, title, description, price, tags) {
      this.id = id;
      this.picture = picture;
      this.title = title;
      this.description = description;
      this.price = price;
      this.tags = tags;
    }
  }

  let items = localStorage.items ? JSON.parse(localStorage.items) : [];
  const id = items.length;
  const picture = $(".addItemPicture").val();
  const title = $(".addItemTitle").val();
  const description = $(".addItemDescription").val();
  const price = $(".addItemPrice").val() + " $";
  const tags = [];
  for (let i = 0; i < 3; i++) {
    tags[i] = "#" + $(`.addItemTag-${i}`).val() + " ";
  }

  const newItem = new Item(id, picture, title, description, price, tags);
  items.push(newItem);
  localStorage.items = JSON.stringify(items);
}
