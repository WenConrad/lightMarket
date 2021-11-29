// Client facing scripts here

$(document).ready(function() {
  const main = document.querySelector('main')
  const sampleListings = [
    {
      title: "The white House",
      pic: "https://media.architecturaldigest.com/photos/59a6c857134a14225b851902/3:4/w_2673,h_3564,c_limit/GettyImages-167852887.jpg",
      price: 200,
    },
    {
      title: "The Eiffel Tower",
      pic: "https://www.planetware.com/photos-large/F/eiffel-tower.jpg",
      price: 750,
    },
  ];


  const createListings = function (arr) {

    return arr.forEach((listing) => {
        const card = document.createElement('div');
        const title =  $(`<h1>${listing.title}</h1>`)
       const pic = $("<img>", { src: listing.pic}).addClass('image')
        const price = $(`<h3>Listed for: $${listing.price}</h3>`)
        card.className = 'cardStyle';
        $(card).append($(title));
       $(card).append($(pic));
       $(card).append($(price));
      main.appendChild(card)
  })
  }
  createListings(sampleListings)
  })
