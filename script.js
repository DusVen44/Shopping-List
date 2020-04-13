//Make the Check Button functional - give the function a variable name for easy callback later
let checkButton = function() {
    $(".shopping-item-toggle").on("click", function() {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  })};
  checkButton();
  
  //Make the Delete Button functional - give the function a variable name for easy callback later
  let delButton = function() {
    $(".shopping-item-delete").on("click", function() {
    $(this).parent().parent().remove();
  })};
  delButton();
  
  //Create a variable called buttons to add the 2 buttons in function below
  let buttons = "<div class='shopping-item-controls'><button class='shopping-item-toggle'>\
                 <span class='button-label'>check</span></button>\
                 <button class='shopping-item-delete'><span class='button-label'>delete</span></button></div>";
  
  //Add new Item to List
  $("#js-shopping-list-form").submit(function() {
    let item = $("#shopping-list-entry").val();
    if (item != "") { //As long as the input has text in it, run the function below
    $(".shopping-list").append("<li>" + "<span class='shopping-item'>" + item + "</span>" + buttons + "</li>");
    event.preventDefault();
    checkButton();//Make the check button functional
    delButton();//Make the delete button functional
    } else { //if NO text is in the input, show this alert
      alert("Must enter an item name!");
    }
  });