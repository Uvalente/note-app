// import { expect } from "./test"

// import { Note } from "../src/note-model"
(function(exports) {
  let noteListView
  let note = new Note('hello')
  let noteList = new NoteList()
  noteList.addNote(note)


  function displayNotes() {
    noteListView = new NoteListView(noteList)
    console.log('displayNotes')
    expect(noteListView.displayNotes()).toEqual('<ul><li><div>hello</div></li></ul>')
  }

  displayNotes()
})(this)