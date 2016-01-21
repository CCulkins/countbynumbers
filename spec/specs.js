describe("countby", function() {
  it("It should count by number x up until number y.", function() {
    expect(countby(30, 5)).to.eql([5, 10, 15, 20, 25,]);
  });
});
