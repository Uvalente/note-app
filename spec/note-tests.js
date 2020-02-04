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

  function checkId() {
    console.log('checkID')
    let note2 = new Note(text)
    let note3 = new Note('Testing Note')
    expect(note.id).toEqual(0)
    expect(note2.id).toEqual(1)
    expect(note3.id).toEqual(2)
  }
  
  testNoteText()
  testViewNote()
  checkId()
})(this)

