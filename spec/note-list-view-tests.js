(function(exports) {
  let noteListView
  let noteOne = 'Note 1'
  let noteTwo = 'Note 2'
  let noteList = new NoteList()
  noteList.addNote(noteOne)
  noteList.addNote(noteTwo)


  function displayNotes() {
    noteListView = new NoteListView(noteList)
    console.log('displayNotes')
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>Note 1</div></li><li><div>Note 2</div></li></ul>')
  }

  displayNotes()
})(this)