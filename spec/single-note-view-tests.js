(function(exports) {
  var singleView

  function displaySingleNote() {
    let note = new Note('Favourite drink: seltzer')
    singleView = new SingleView()
    console.log('displaySingleNote')
    expect(singleView.display(note)).toEqual('<div>Favourite drink: seltzer</div>')
  }

  displaySingleNote()
})(this)