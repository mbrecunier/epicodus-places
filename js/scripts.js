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
    var inputtedNotes = $("input#new-notes").val();
    var newPlace = new Place(inputtedRegion, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);


  }
}
