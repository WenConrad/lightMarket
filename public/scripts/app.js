// Client facing scripts here

$(document).ready(function () {


  const main = document.querySelector("main");

//renders content from the database into html

  const displayListings = function (arr) {
    console.log(arr)
    return arr.widgets.forEach((listing) => {
      const card = document.createElement("div");
      const title = $(`<h1>${listing.name}</h1>`);
      const price = $(`<h3>Listed for: $${listing.user_id}</h3>`);
      card.className = "cardStyle";
      $(card).append($(title));
      $(card).append($(price));
      main.appendChild(card);
    });
  };

  //connects to the database, in this case is the db/seeds/widgets.sql

  const getListings = () => {

    $.ajax({
      url: '/api/widgets',
      method: 'GET'
    })
    .then(result => {
      //console.log(result)
      displayListings(result)
    })
    .catch(err =>
      console.log(err.message))
  }
  getListings()
//renders all the necessary listings

});
