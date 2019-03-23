import $ from "jquery";

function deleteItems() {
  $(".card-columns").on("click", ".btnForDelete", function() {
    const idToDelete = Number(
      $(this)
        .attr("id")
        .substr(13)
    );
    console.log(idToDelete);
    let items = localStorage.items ? JSON.parse(localStorage.items) : [];
    console.log(items);

    delete items[idToDelete];

    localStorage.items = JSON.stringify(items);
    $(`.dataId${idToDelete}`).remove();
    return;
  });
  return;
}
$(document).ready(() => {
  deleteItems();
});

export default deleteItems;
