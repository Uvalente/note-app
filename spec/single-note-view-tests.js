(function(exports) {
  var singleView

  function displaySingleNote() {
    singleView = new SingleView(new Note('Favourite drink: seltzer'))
    console.log('displaySingleNote')
    expect(singleView.display()).toEqual('<div>Favourite drink: seltzer</div>')
  }

  displaySingleNote()
})(this)