$(function ($) => {
  
  const newPropertyForm = $(`
  <form class ='new_property_form'>
  <div class="form-group">
      <label for="new_listing_title">Title</label>
      <input type="text" class="form-control" id="new_listing_title" placeholder="title">
    </div>
    <div class="form-group">
      <label for="description-text" class="col-form-label">Description:</label>
      <textarea style="height: fit-content" class="form-control" id="description-text"></textarea>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Price</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="123">
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Bedrooms</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Bathrooms</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5+</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlSelect1">Property type</label>
      <select class="form-control" id="exampleFormControlSelect1">
        <option>Appartment</option>
        <option>Condo</option>
        <option>Single House</option>
        <option>Duplex</option>
      </select>
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Build year</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="123">
    </div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Sqft</label>
      <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="123">
    </div>
    <button type="submit" class="btn btn-primary" id="submit_new_listing">Submit</button>
  </form>
  `);

  const $tempContainer = $('.banner');
  $('.new_listing').click(function(event) {
    event.preventDefault();
    $('.banner').empty();
    $('.banner').append($newPropertyForm);
  })

  $('#submit_new_listing').on('submit', function(event) {
    event.preventDefault();
    $('.banner').empty();
    $('.banner').append($tempContainer);
  })
})
