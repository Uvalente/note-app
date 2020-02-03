(function(exports) {
  function testNoteText() {
    var text = 'My favourite language is JavaScript'
    var note = new Note(text)

    if (note.text !== text) {
      throw new Error('testNoteText - FAILED')
    } else {
      console.log('testNoteText - PASSED')
    }
  }

  testNoteText()
})(this)
