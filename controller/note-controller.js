(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
  }
  
  NoteController.prototype.addNote = function (note) {
    this.noteList.addNote(note)
  }

  NoteController.prototype.displayNotes = function() {
    let noteListView = new NoteListView(this.noteList)
    let app = document.getElementById('app')
    app.innerHTML = noteListView.displayNotes()
  }
 
  exports.NoteController = NoteController
})(this)

 let noteController = new NoteController(new NoteList)
 noteController.addNote('test')
 noteController.displayNotes()