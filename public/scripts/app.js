// Client facing scripts here

$(function ($) {

  const currentUserId = 2
  const filter = document.getElementById("filter");

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
    <button type="submit" class='btn btn-primary' id="submit_new_listing">Submit</button>
  </form>
  `);


  $('#new_listing').click(function(e) {
     e.preventDefault();
    $(".listing-adds").empty();
    $(".listing-adds").append(newPropertyForm);

    $('.new_property_form').on('submit', function(event) {
        event.preventDefault();
        console.log('first value:', event.target[0].value)

      const data = {
        title: event.target[0].value,
        description: event.target[1].value ,
        price: event.target[2].value ,
        bedrooms: event.target[3].value ,
        bathrooms: event.target[4].value ,
        property_type: event.target[5].value ,
        build_year: event.target[6].value ,
        sqft: event.target[7].value
      }
      console.log(data)

     return $.ajax({
        url: "/api/newProperty",
        method: "POST",
        data: data
      }).then((result) => {

          console.log('this is the result:',result);
          return result

        })
        .catch((err) => console.log("Error:", err.message));
    })
  })




  filter.addEventListener("submit", function (event) {
    event.preventDefault();
    let limit = filter.elements[0].value;

    $(".listing-adds").empty();

    const displayProperties = function (arr) {

      return arr.properties.forEach((property) => {
        if (property.price < limit) {
          $(".listing-adds").append(`<div class="card" id='listing-${property.id}'>

          <img src="${property.photo_url}" class="card-img-top" alt="house1.jpg">
          <div class="card-body">
            <h5 class="card-title">${property.address}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: $${property.price}</li>
            <li class="list-group-item">#Bedroom: ${property.bedrooms}</li>
            <li class="list-group-item"># Bathroom: ${property.bathrooms}</li>
            <li class="list-group-item">Sqrt: ${property.sqft}</li>
          </ul>
          <div class="card-body card-body_links">

              <button type="submit" id='favorite-${property.id}' class="btn btn-outline-success"><i class="far fa-heart"></i></button>

            <button type="button" id='test-button' class="btn btn-outline-secondary"><a href="mailto:${property.email}"><i class="far fa-envelope"></i></a></button>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"><i class="far fa-comments"></i></button>

            <!-- pop up modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <!-- message send to database -->
                    <form method="get" action="/">
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea style="height: fit-content" class="form-control" id="message-text"></textarea>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Send message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <form method="delete" action="">

              <button type="button" id='delete-${property.id}' class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></a></button>
            </form>
          </div></div>`);

           $(`#favorite-${property.id}`).click(function () {

             alert('this property has been added to your favourites')
             const data = {
               user_id: currentUserId,
               listing_id: property.listing_id
             }
             $.ajax({
               url: "/api/favourites",
               method: "POST",
               data: data
             })
               .done((result) => {
                 console.log(result);

               })
               .catch((err) => console.log("Err:", err));

           });
           $(`#delete-${property.id}`).click(function () {
             $(this).closest(`#listing-${property.id}`).remove();
           });
        }

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
        .catch((err) => console.log("Error:", err));
    };

    displayListings();
  });

  $("#nav-favorite").click(function (event) {


    $(".listing-adds").empty();

    const displayProperties = function (arr) {
      return arr.properties.forEach((property) => {
        if (property.user_id === currentUserId) {
          $(".listing-adds").append(`<div class="card" id="listing-${property.id}>

<img src="${property.photo_url}" class="card-img-top" alt="house1.jpg">
<div class="card-body">
  <h5 class="card-title">${property.address}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Price: $${property.price}</li>
  <li class="list-group-item">#Bedroom: ${property.bedrooms}</li>
  <li class="list-group-item"># Bathroom: ${property.bathrooms}</li>
  <li class="list-group-item">Sqrt: ${property.sqft}</li>
</ul>
<div class="card-body card-body_links">



  <button type="button" id='test-button' class="btn btn-outline-secondary"><a href="mailto:${property.email}"><i class="far fa-envelope"></i></a></button>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"><i class="far fa-comments"></i></button>

  <!-- pop up modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- message send to database -->
          <form method="get" action="/">
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea style="height: fit-content" class="form-control" id="message-text"></textarea>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <form method="delete" action="/" class="delete-${property.id}">

    <button type="submit" id="delete-${property.id}" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></a></button>
  </form>
</div>
</div>`);

          $(`#favorite-${property.id}`).click(function () {
           alert("This property has been added to your favorites");
          });
        }
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
        .catch((err) => console.log("Error:", err));
    };

    displayListings();
  });

  $("#home").click(function (event) {


    $(".listing-adds").empty();

    const displayProperties = function (arr) {
      return arr.properties.forEach((property) => {
          $(".listing-adds").append(`<div class="card" id="listing-${property.id}>

          <img src="${property.photo_url}" class="card-img-top" alt="house1.jpg">
          <div class="card-body">
            <h5 class="card-title">${property.address}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: $${property.price}</li>
            <li class="list-group-item">#Bedroom: ${property.bedrooms}</li>
            <li class="list-group-item"># Bathroom: ${property.bathrooms}</li>
            <li class="list-group-item">Sqrt: ${property.sqft}</li>
          </ul>
          <div class="card-body card-body_links">

              <button type='button' id='favorite-${property.id}' class="btn btn-outline-success"><i class="far fa-heart"></i></button>

            <button type="button" id='test-button' class="btn btn-outline-secondary"><a href="mailto:${property.email}"><i class="far fa-envelope"></i></a></button>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap"><i class="far fa-comments"></i></button>

            <!-- pop up modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <!-- message send to database -->
                    <form method="get" action="/">
                      <div class="form-group">
                        <label for="message-text" class="col-form-label">Message:</label>
                        <textarea style="height: fit-content" class="form-control" id="message-text"></textarea>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Send message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <form method="delete" action="">

              <button type="button" id="#delete-${property.id}" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></a></button>
            </form>
          </div>
          </div>`).slideDown();

          $(`favorite-${property.id}`).click(function (e) {
            alert('this property has been added to your favourites')
            e.preventDefault()
             const data = {
               user_id: currentUserId,
               listing_id: property.listing_id
             }
             $.ajax({
               url: "/api/favourites",
               method: "POST",
               data: data
             })
               .done((result) => {
                 console.log(result);

               })
               .catch((err) => console.log("Err:", err));

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
        .catch((err) => console.log("Error:", err));
    };

    displayListings();
  });
});


