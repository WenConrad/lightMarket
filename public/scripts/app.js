// Client facing scripts here

//$(document).ready(function () {


  $(function( $ ){

//renders content from the database into html
  const displayProperties = function (arr) {
    console.log(arr)
    return arr.properties.forEach((property) => {


      $('.container').append(`<section class="listing-adds"> <div claconst displayListingInfo = function (arr) {

      }"list-group-item">Number of bedrooms: ${property.bedrooms}</li><li class="list-group-item">Number of bathrooms: ${property.bathrooms}</li></ul><button id='button-listings'>Listing info</button></div></section>`)

    });
  };


  //connects to the database, in this case is the db/seeds/widgets.sql

  const displayListings = () => {

    $.ajax({
      url: '/api/properties',
      method: 'GET'
    })
    .then(result => {
      console.log(result)
      displayProperties(result)
    })
    .catch(err =>
      console.log(err.message))
  }
  displayListings()
//renders all the necessary listings
  const displayListingInfo = function (arr) {
      console.log(arr)
      return arr.properties.forEach((property) => {
      
        $('.container').append(`<section class="listing-adds"> <div claconst displayListingInfo = function (arr) {

        }"list-group-item">Number of bedrooms: ${property.bedrooms}</li><li class="list-group-item">Number of bathrooms: ${property.bathrooms}</li></ul><button id='button-listings'>Listing info</button></div></section>`)

      });
    };
  })

