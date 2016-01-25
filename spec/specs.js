describe('Place', function() {
  it("creates a new place with the given properties", function() {
    var testPlace = new Place("Oregon", ["Multnomah Falls", "Crater Lake"]);
    expect(testPlace.region).to.equal("Oregon");
    expect(testPlace.landmarks).to.eql(["Multnomah Falls", "Crater Lake"]);
    expect(testPlace.timeOfYear).to.equal();
    expect(testPlace.notes).to.equal();
  });
});
