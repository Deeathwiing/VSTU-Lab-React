import $ from "jquery";

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

export default deleteItems;
