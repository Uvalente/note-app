(function(exports) {
  function testNoteText() {
    var text = 'My favourite language is JavaScript'
    var note = new Note(text)
    expect(note.text).toEqual(text)
  }

  testNoteText()
})(this)

