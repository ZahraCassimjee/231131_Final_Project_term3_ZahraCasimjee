
for (let i = 0; i < plantsToShow.length; i++) {
    const plant = plantsToShow[i];
    
    console.log(plant.name);

    $.ajax({
      type:"GET",
      url:"https://api.openweathermap.org/data/2.5/weather?q=" + trips.destination +"&appid=64420d889e704b43c562865c8fbaf006",
      success: function(data){
        temperature = data 
        console.log(temperature);
      }
    }).done(function(){
      $(currentChild).find("#currentTemp").text("OriginTemp: " + Math.round(temperature.main.temp- 273) + "°C");
    })

    // 1: Select the plants container add the plant card to it
    $("#TripsContainer").append($("#tripCardTemplate").html());

    // 2: Create a variable that contains the most recently added plant card
    let currentChild = $("#TripsContainer").children().eq(i);

    // 3: Set the content for the current plant card from the plant array
    $(currentChild).find("#nameText").text(trips.name);
    $(currentChild).find("#priceText").text(trips.price);
    $(currentChild).find("#descriptionText").text(trips.description);
    
    $(currentChild).find(".card-img-top").attr('src','assets/' + trips.image);

    // 4: Hide the description text from the curent card
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find("#currentTemp").hide();
  };