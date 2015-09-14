$(document).ready(function() {

    // debugger;

    $("#add-trip").click(function() {
        $("#new-trips").append('<div class="new-trips">' +
                                        '<div class="form-group">' +
                                            '<label for="new-date">Date</label>' +
                                            '<input type="text" class="form-control new-date">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-city">Landmarks</label>' +
                                            '<input type="text" class="form-control new-landmarks">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-state">Notes</label>' +
                                            '<input type="text" class="form-control new-notes">' +
                                        '</div>' +
                                    '</div>');
    });

    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputtedlocation = $("input#new-location").val();

        var newPlace = { location: inputtedlocation, trips: []};

        $(".new-trips").each(function() {
            var inputtedDate = $(this).find("input.new-date").val();
            var inputtedLandmarks = $(this).find("input.new-landmarks").val();
            var inputtedNotes = $(this).find("input.new-notes").val();

            var newTrip = { date: inputtedDate, landmarks: inputtedLandmarks, notes: inputtedNotes};
            // console.log(newTrip);

            newPlace.trips.push(newTrip);
        });

        $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

        $(".place").last().click(function() {
            $("#show-place").show();
            $("#show-place h2").text(newPlace.location);

            $("ul#trips").text("");
            newPlace.trips.forEach(function(trip, index) {
                $("ul#trips").append("<li><span class='trip trip" + index + "'>" + trip.date + "</span></li>");
                $(".trip" + index).click(function() {
                    $("#show-trip").show();
                    $("#show-trip h3").text(newPlace.trips[index].date);
                    $(".landmarks").text(newPlace.trips[index].landmarks);
                    $(".notes").text(newPlace.trips[index].notes);

                });
            });

        });

        $("input#new-location").val("");
        $("input.new-date").val("");
        $("input.new-landmarks").val("");
        $("input.new-notes").val("");
    });
});
