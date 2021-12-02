$(() => {
  const $newPropertyForm = $(`
  <form class ='new_property_form' action="/newlisting" method="POST">
  <div class="form-group">
      <label for="new_listing_title">Title</label>
      <input type="text" class="form-control" id="new_listing_title" placeholder="title">
    </div>
    <div class="form-group">
      <label for="description-text" class="col-form-label">Description:</label>
      <textarea style="height: fit-content" class="form-control" id="description-text"></textarea>
    </div>
    <div class="form-group">
      <label for="price-listing">Price</label>
      <input type="number" class="form-control" id="price-listing" placeholder="123">
    </div>
    <div class="form-group">
      <label for="bedrooms-listing">Bedrooms</label>
      <select class="form-control" id="bedrooms-listing">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </div>
    <div class="form-group">
      <label for="bathrooms-listing">Bathrooms</label>
      <select class="form-control" id="bathrooms-listing">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </div>
    <div class="form-group">
      <label for="property-type">Property type</label>
      <select class="form-control" id="property-type">
        <option>Appartment</option>
        <option>Condo</option>
        <option>Single House</option>
        <option>Duplex</option>
      </select>
    </div>
    <div class="form-group">
      <label for="build-year-listiong">Build year</label>
      <input type="number" class="form-control" id="build-year-listiong" placeholder="123">
    </div>
    <div class="form-group">
      <label for="sqft-listing">Sqft</label>
      <input type="number" class="form-control" id="sqft-listing" placeholder="123">
    </div>
    <button type="submit" class="btn btn-primary" id="submit_new_listing">Submit</button>

  </form>
  `);

  const $tempContainer = $('.banner');
  $('.new_listing').click(function(event) {
    event.preventDefault();
    $('.banner').empty();
    $('.banner').append($newPropertyForm);
  });

  // $('.new_property_form').on('submit', function(event) {
  $('.new_property_form').on('submit', function(event) {
    event.preventDefault();
    alert('a');
    const $title = $("#new_listing_title").val();
    const $description = $("#description-text").val();
    const $price = $("#price-listing").val();
    const $bedrooms = $("#bedrooms-listing").val();
    const $bathrooms = $("#bathrooms-listing").val();
    const $propertyType = $("#property-type").val();
    const $buildYear = $("#build-year-listiong").val();
    const $sqftListing = $("#sqft-listing").val();

    console.log($title);

    $('.banner').empty();
    $('.banner').append($tempContainer);

    //send data to data base
//     $.ajax({
//       url: "",
//       method: "POST",
//       data: ,
//     }).then((result) => {
//       $("textarea").val("");
//     });
// //get last added data from data base
//     $.get("http://localhost:8080/api/", (data) => {
//       const newListObj = data.slice(-1).pop();
//       const newListing = createNewListing(newListObj);
//       $(".listing-adds").prepend(newListing);
//     });
  });
})