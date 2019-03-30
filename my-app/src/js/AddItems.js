import $ from "jquery";
import "popper.js";
import "jquery";
import "popper.js";

export function addItems() {
  class Item {
    constructor(id, picture, title, description, price, tags, rating) {
      this.id = id;
      this.picture = picture;
      this.title = title;
      this.description = description;
      this.price = price;
      this.tags = tags;
      this.rating = rating;
    }
  }

  let items = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  let lastElement = items[items.length - 1];
  const id = lastElement ? lastElement.id + 1 : 0;

  const picture = $(".addItemPicture").val();
  const title = $(".addItemTitle").val();
  const description = $(".addItemDescription").val();
  const price = $(".addItemPrice").val() + " $";
  const tags = [];
  const rating = [];
  for (let i = 0; i < 3; i++) {
    tags[i] = "#" + $(`.addItemTag-${i}`).val() + " ";
  }

  const newItem = new Item(
    id,
    picture,
    title,
    description,
    price,
    tags,
    rating
  );
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
}
