// Client facing scripts here

//$(document).ready(function () {

$(function ($) {
  //renders content from the database into html
  const displayProperties = function (arr) {


    return arr.properties.forEach((property) => {
      $( '.listing-adds' ).append( `<div class="card" style="width: 18rem;">
      <img src="./images/main/house1.png" class="card-img-top" alt="house1.jpg">
      <div class="card-body">
        <h5 class="card-title">${property.address}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Price: $${property.price}</li>
        <li class="list-group-item">#Bedrooms: ${property.bedrooms}</li>
        <li class="list-group-item"># Bathrooms: ${property.bathrooms}</li>
        <li class="list-group-item">Sqrt: ${property.sqft}</li>
      </ul>
      <div class="card-body card-body_links">
        <form method="post" action="/favourite">
          <button type="submit" id='favorite-${property.id}' class="btn btn-outline-danger"><i class="far fa-heart"></i></button>
        </form>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>` )

      // $(".container")
      //   .append(`<section class="listing-adds">  <div class="card" style="width: 18rem;">

      // <div class="card-body"><li class="list-group-item">  <h5 class="card-title">${property.address}</h5>Number of bedrooms: ${property.bedrooms}</h5> <ul class="list-group list-group-flush"><li class="list-group-item">Number of bathrooms: ${property.bathrooms}</li><li class="list-group-item">Listed for $${property.price}</li></ul></div>
      // <div class="card-body card-body_links">
      // <button id='favorite-${property.id}' class="favorite btn btn-outline-danger"><i class="far fa-heart"></i></button></div></section>`);
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
