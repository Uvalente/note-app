(function(exports) {
  function NoteController(noteList, noteListView, singleView) {
    this.noteList = noteList
    this.noteListView = noteListView
    this.noteListView.changeList(this.noteList)
    this.singleView = singleView
  }
  
  NoteController.prototype.addNote = function (note) {
    this.noteList.addNote(note)
  }

  NoteController.prototype.displayNotes = function(elementID) {
    let app = document.getElementById(elementID)
    app.innerHTML = this.noteListView.displayNotes()
  }

  NoteController.prototype.redirect = function() {
    window.addEventListener("hashchange", this.displaySingleNote())
  }

  NoteController.prototype.displaySingleNote = function() {
    let noteID = location.hash.split('#notes/')[1]
    let note = this.noteList.findNote(noteID)
    document.getElementById('app').innerHTML = this.singleView.display(note)
  }

  exports.NoteController = NoteController
})(this)

//  let noteController = new NoteController(new NoteList)
//  noteController.addNote('test')
//  noteController.displayNotes('app')