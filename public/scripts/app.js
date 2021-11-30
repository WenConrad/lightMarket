// Client facing scripts here

//$(document).ready(function () {

$(function ($) {
  //renders content from the database into html
  const displayProperties = function (arr) {


    return arr.properties.forEach((property) => {
      $(".container")
        .append(`<section class="listing-adds">  <div class="card" style="width: 18rem;">

      <div class="card-body"><li class="list-group-item">  <h5 class="card-title">${property.address}</h5>Number of bedrooms: ${property.bedrooms}</h5> <ul class="list-group list-group-flush"><li class="list-group-item">Number of bathrooms: ${property.bathrooms}</li><li class="list-group-item">Listed for $${property.price}</li></ul></div>
      <div class="card-body card-body_links">
      <button id='favorite-${property.id}' class="favorite btn btn-outline-danger"><i class="far fa-heart"></i></button></div></section>`);
      $(`#favorite-${property.id}`).click(function () {
        alert("This property has been added to your favorites");
      });
    });
  };

  //connects to the database, in this case is the db/seeds/properties.sql

  const displayListings = () => {
    $.ajax({
      url: "/api/properties",
      method: "GET",
    })
      .then((result) => {
        console.log(result);
        displayProperties(result);
      })
      .catch((err) => console.log(err.message));
  };

  displayListings();

});
