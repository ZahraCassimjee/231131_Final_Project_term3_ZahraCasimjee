const purchaseTrip = [
    {
        
        name: "Caribbean Cruise",
        price: "12000",
        tripCode: "CAR123",
        remove:"-"
        
    },
    {
        name: "Mediterranean Adventure",
        price: "15000",
        tripCode: "MED456",
        remove:"-"

     
    },
    {
        name: "Alaskan Expedition",
        price: "18000",
        tripCode: "ALA789",
        remove:"-"

    },
    {
        name: "Tropical Paradise",
        price: "14000",
        tripCode: "TRO101",
        remove:"-"

    },
    {
        name: "European Escapade",
        price: "25000",
        tripCode: "EUR202",
        remove:"-"

    },
    {
        name: "Exotic Asia Tour",
        price: "22000",
        tripCode: "ASI303",
        remove:"-"

    },
    {
        name: "Australian Adventure",
        price: "19000",
        tripCode: "AUS404",
        remove:"-"

    },
    {
        name: "South American Discovery",
        price: "23000",
        tripCode: "SAM505",
        remove:"-"

    },
    {
        name: "Arctic Expedition",
        price: "28000",
        tripCode: "ARC606",
        remove:"-"

    }
];

$(document).ready(function () {
    // Initialize wishlist array to store plant data
    var checkout = [];

    // Function to add a plant to the wishlist
    function addTripToCheckout(loadTripOptions) {
        // Check if the wishlist is full (maximum 5 plants)
        if (checkout.length >= 10) {
            alert("Your Cart is full. Please remove a trip to add more.");
            return;
        }

        // Add plant data to the wishlist array
        checkout.push(loadTripOptions);

        // Update the table with the new plant data
        updateCheckoutTable();
    }

    // Function to remove a plant from the wishlist
    function removeTripFromCheckout(index) {
        checkout.splice(index, 1);
        updateCheckoutTable();
    }

    // Function to update the wishlist table
    function updateCheckoutTable() {
        var tableBody = $("#checkoutTable");
        tableBody.empty(); // Clear existing table data

        // Loop through the wishlist array and add rows to the table
        for (var i = 0; i < checkout.length; i++) {
            var checkoutT = checkout[i];
            var row = $("<tr>");

              // Add trip code column
              var codeCell = $("<td>").text(checkoutT.tripCode);
              row.append(codeCell); 

            // Add trip name column
            var nameCell = $("<td>").text(checkoutT.name);
            row.append(nameCell);
            
            // Add trip price column
            var costCell = $("<td>").text(checkoutT.price);
            row.append(costCell);

            // Add remove option column
            var removeCell = $("<td>").html('<button class="remove-btn">-</button>');
            row.append(removeCell);

            // Attach event listener to remove button
            removeCell.find(".remove-btn").click(function () {
                var rowIndex = $(this).closest("tr").index();
                removeTripFromCheckout(rowIndex);
            });

            // Adding the row to the table
            tableBody.append(row);
        }
    }

   
    
    addTripToCheckout({ tripCode: "CAR123", name: "Caribbean Cruise", price: "R12000" });
    addTripToCheckout({ tripCode: "MED456", name: "Mediterranean Adventure", price: "R15000" });
    addTripToCheckout({ tripCode: "ALA789", name: "Alaskan Expedition", price: "R18000" });
    addTripToCheckout({ tripCode: "TRO101", name: "Tropical Paradise", price: "R14000" });
    addTripToCheckout({ tripCode: "EUR202", name: "European Escapade", price: "R25000" });
    addTripToCheckout({ tripCode: "ASI303", name: "Exotic Asia Tour", price: "R22000" });
    addTripToCheckout({ tripCode: "AUS404", name: "Australian Adventure", price: "R19000" });
    addTripToCheckout({ tripCode: "SAM50", name: "South American Discovery", price: "R23000" });
    addTripToCheckout({ tripCode: "ARC606", name: "Arctic Expedition", price: "R28000" });
});

