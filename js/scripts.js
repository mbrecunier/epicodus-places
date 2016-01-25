function Place(region, landmarks, timeOfYear, notes) {
  this.region = region;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedRegion = $("input#new-region").val();
    var inputtedLandmarks = [$("input#new-landmark1").val(), $("input#new-landmark2").val(), $("input#new-landmark3").val()];
    var inputtedTimeOfYear = $("input#new-timeOfYear").val();
    var inputtedNotes = $("textarea#new-notes").val();
    var newPlace = new Place(inputtedRegion, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);

    $("ul#placeList").append("<li><span class='place'>" + newPlace.region + "</span></li>");

    $(".place").last().click(function() {
      $("#show-placeInfo").show();
      $("#show-placeInfo h2").text(newPlace.region);
      $(".region").text(newPlace.region);
      $(".landmark1").text(newPlace.landmarks[0]);
      $(".landmark2").text(newPlace.landmarks[1]);
      $(".landmark3").text(newPlace.landmarks[2]);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
      })

  });
});
