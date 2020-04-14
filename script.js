//Make the Check Button functional
$(".shopping-list").on("click", ".shopping-item-toggle span", function() {
    $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
  });
  
//Make the Delete Button functional
$(".shopping-list").on("click", ".shopping-item-delete", function() {
    $(this).parent().parent().remove();
  });
  
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
    } else { //if NO text is in the input, show this alert
      alert("Must enter an item name!");
    }
  });