// Client facing scripts here

$(function ($) {

  const currentUserId = 2
  const filter = document.getElementById("filter");

  filter.addEventListener("submit", function (event) {
    event.preventDefault();
    let limit = filter.elements[0].value;

    $(".listing-adds").empty();

    const displayProperties = function (arr) {

      return arr.properties.forEach((property) => {
        if (property.price < limit) {
          $(".listing-adds").append(`<div class="card">

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

              <button type="button" id='test-button' class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></a></button>
            </form>
          </div></div>`);

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

  $("#nav-favorite").click(function (event) {


    $(".listing-adds").empty();

    const displayProperties = function (arr) {
      return arr.properties.forEach((property) => {
        if (property.user_id === currentUserId) {
          $(".listing-adds").append(`<div class="card">

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

    <button type="button" id='test-button' class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></a></button>
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
    let limit = filter.elements[0].value;

    $(".listing-adds").empty();

    const displayProperties = function (arr) {
      return arr.properties.forEach((property) => {
          $(".listing-adds").append(`<div class="card">

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

              <button type="button" id='test-button' class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></a></button>
            </form>
          </div>
          </div>`);

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
        .catch((err) => console.log("Error:", err));
    };

    displayListings();
  });
});
