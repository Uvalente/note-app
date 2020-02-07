(function(exports) {
  let noteListView
  let noteOne = new Note('Note 1')
  let noteTwo = new Note('Note 2')
  let noteThree = new Note("I am a really long note, that I don't want to display in full in the homepage. So cut me at 20 chars!")
  let noteList = new NoteList()
  noteList.addNote(noteOne)
  noteList.addNote(noteTwo)

  function displayNotes() {
    noteListView = new NoteListView(noteList)
    let noteOne = noteList.viewAll()[0]
    let noteTwo = noteList.viewAll()[1]
    console.log('displayNotes')
    expect(noteListView.displayNotes()).toEqual(`<ul><li><div><a href="#notes/${noteOne.id}" id="${noteOne.id}">Note 1...</a></div></li><li><div><a href="#notes/${noteTwo.id}" id="${noteTwo.id}">Note 2...</a></div></li></ul>`)
  }

  function displayOneNote() {
    console.log('displayOneNote')
    let singleNoteList = new NoteList()
    singleNoteList.addNote(noteOne)
    let testNote = singleNoteList.viewAll()[0]
    noteListView = new NoteListView(singleNoteList)
    expect(noteListView.displayNotes()).toEqual(`<ul><li><div><a href="#notes/${testNote.id}" id="${testNote.id}">Note 1...</a></div></li></ul>`)
  }

  function displayFirstTwentyChars() {
    console.log('displayFirstTwentyChars')
    let longNoteList = new NoteList()
    longNoteList.addNote(noteThree)
    let testNote = longNoteList.viewAll()[0]
    noteListView = new NoteListView(longNoteList)
    expect(noteListView.displayNotes()).toEqual(`<ul><li><div><a href="#notes/${testNote.id}" id="${testNote.id}">I am a really long n...</a></div></li></ul>`)
  }


  displayNotes()
  displayOneNote()
  displayFirstTwentyChars()
})(this)