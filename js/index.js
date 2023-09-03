const trips = [
    {
        
        name: "Caribbean Cruise",
        destination: "Caribbean Islands",
        price: "12000",
        dateOfDeparture: "2023-09-15",
        duration: "7 days",
        tripCode: "CAR123",
        image: "card 2.jpg"
    },
    {
        name: "Mediterranean Adventure",
        destination: "Mediterranean Sea",
        price: "15000",
        dateOfDeparture: "2023-08-20",
        duration: "10 days",
        tripCode: "MED456",
        image: "card 8.jpg"
    },
    {
        name: "Alaskan Expedition",
        destination: "Alaska, USA",
        price: "18000",
        dateOfDeparture: "2023-07-10",
        duration: "14 days",
        tripCode: "ALA789",
        image: "card 3.jpg"
    },
    {
        name: "Tropical Paradise",
        destination: "Hawaii, USA",
        price: "14000",
        dateOfDeparture: "2023-08-05",
        duration: "8 days",
        tripCode: "TRO101",
        image: "card 6.jpeg"
    },
    {
        name: "European Escapade",
        destination: "Various European Cities",
        price: "25000",
        dateOfDeparture: "2023-09-01",
        duration: "12 days",
        tripCode: "EUR202",
        image: "card 5.jpg"
    },
    {
        name: "Exotic Asia Tour",
        destination: "Southeast Asia",
        price: "22000",
        dateOfDeparture: "2023-10-10",
        duration: "15 days",
        tripCode: "ASI303",
        image: "card 4.jpg"
    },
    {
        name: "Australian Adventure",
        destination: "Australia",
        price: "19000",
        dateOfDeparture: "2023-11-20",
        duration: "11 days",
        tripCode: "AUS404",
        image: "card 9.jpg"
    },
    {
        name: "South American Discovery",
        destination: "South America",
        price: "23000",
        dateOfDeparture: "2023-12-05",
        duration: "13 days",
        tripCode: "SAM505",
        image: "card 7.jpg"
    },
    {
        name: "Arctic Expedition",
        destination: "Arctic Circle",
        price: "28000",
        dateOfDeparture: "2024-01-15",
        duration: "18 days",
        tripCode: "ARC606",
        image: "card 10.jpg"
    }
];

$(document).ready(function() {
    // ... (your existing code)

    // Add an event listener for the price filter dropdown
    $("#price-filter").change(function() {
        const sortByPrice = $("#price-filter").val();
        if (sortByPrice === "high-to-low") {
            trips.sort((a, b) => b.price - a.price);
        } else if (sortByPrice === "low-to-high") {
            trips.sort((a, b) => a.price - b.price);
        }
        // Call loadTripOptions to re-render the sorted trips
        loadTripOptions();
    });
});
    
    
    function loadTripOptions () {
        for (let i = 0; i < trips.length; i++) {
            console.log(trips[i]);
    
            $("#tripsContainer").append($("#tripCardTemplate").html());
    
            let currentChild = $("#tripsContainer").children().eq(i+1);
    
            $(currentChild).find(".card-img-top").attr('src','/assets/' + trips[i].image);
    
            $(currentChild).find("#nameText").text(trips[i].name);
    
            $(currentChild).find("#priceText").text('R ' + trips[i].price);
    
            $(currentChild).find("#destinationText").text(trips[i].destination);
    
            $(currentChild).find("#durationText").text(trips[i].duration);

            $(currentChild).find("#dateOfDepartureTextext").text( trips[i].dateOfDeparture);

            $(currentChild).find("#tripCodeText").text(trips[i].tripCode);
            
            
        }
    }
    
    
    $("#plantsContainer").on('click', '.card', function(){
    
      // Toggle the price & description text
      $(this).find("#priceText").toggle();
      $(this).find("#descriptionText").toggle();
    
      // Resize the image to fit the additional content
      $(this).find(".card-img-top").toggleClass("small");
    
    });


    
    

    

    






// $(document).ready(function() {
//     const tripContainer = $("#trip-container");

//     trips.forEach(function(trip) {
//         const card = `
//             <div class="card mb-3">
//                 <div class="card-body">
//                     <h5 class="card-title">${trip.name}</h5>
//                     <p class="card-text"><strong>Destination:</strong> ${trip.destination}</p>
//                     <p class="card-text"><strong>Price:</strong> ${trip.price}</p>
//                     <p class="card-text"><strong>Date of Departure:</strong> ${trip.dateOfDeparture}</p>
//                     <p class="card-text"><strong>Duration:</strong> ${trip.duration}</p>
//                     <p class="card-text"><strong>Trip Code:</strong> ${trip.tripCode}</p>
//                 </div>
//             </div>
//         `;
//         tripContainer.append(card);
//     });
// });
