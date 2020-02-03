// import { Note } from "../src/note-model"

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.displayNotes = function() {
    console.log(this.noteList)
  }

  exports.NoteListView = NoteListView

})(this)