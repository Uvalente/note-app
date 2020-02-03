(function(exports) {

  var text = 'My favourite language is JavaScript'
  var note = new Note(text)
  function testNoteText() {
    console.log('testNoteText')
    expect(note.text).toEqual(text)
  }

  function testViewNote() {
    console.log('testViewNote')
    expect(note.viewNote()).toEqual(text)
  }
  
  testNoteText()
  testViewNote()
})(this)

