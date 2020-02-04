(function(exports) {
  let noteListView
  let noteOne = 'Note 1'
  let noteTwo = 'Note 2'
  let noteThree = "I am a really long note, that I don't want to display in full in the homepage. So cut me at 20 chars!"
  let noteList = new NoteList()
  noteList.addNote(noteOne)
  noteList.addNote(noteTwo)


  function displayNotes() {
    noteListView = new NoteListView(noteList)
    console.log('displayNotes')
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>Note 1...</div></li><li><div>Note 2...</div></li></ul>')
  }

  function displayOneNote() {
    console.log('displayOneNote')
    let singleNoteList = new NoteList()
    singleNoteList.addNote(noteOne)
    noteListView = new NoteListView(singleNoteList)
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>Note 1...</div></li></ul>')
  }

  function displayFirstTwentyChars() {
    console.log('displayFirstTwentyChars')
    let longNoteList = new NoteList()
    longNoteList.addNote(noteThree)
    noteListView = new NoteListView(longNoteList)
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>I am a really long n...</div></li></ul>')
  }


  displayNotes()
  displayOneNote()
  displayFirstTwentyChars()
})(this)