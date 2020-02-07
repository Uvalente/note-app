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

  NoteController.prototype.displayNotes = function (elementID) {
    let app = document.getElementById(elementID)
    app.innerHTML = this.noteListView.displayNotes()
  }

  NoteController.prototype.redirect = function() {
      window.addEventListener("hashchange", this.displaySingleNote())
  }

  NoteController.prototype.displaySingleNote = function () {
    this.showNote(this.getNoteIdFromUrl(window.location))
  }

  NoteController.prototype.getNoteIdFromUrl = function (location) {
    return location.hash.split('#notes/')[1]
  }

  NoteController.prototype.showNote = function (note) {
    document.getElementById('app').innerHTML = this.singleView.display(this.noteList.findNote(note))
  }

  NoteController.prototype.stopEvent = function () {
    submit = document.getElementsByTagName('input')[0]
    submit.addEventListener('click', function(event) {
      event.preventDefault()
    })
  }

  exports.NoteController = NoteController
})(this)

let controller = new NoteController(new NoteList, new NoteListView)
//  controller.addNote(new this.NoteController('test'))
//  controller.displayNotes('app')
controller.stopEvent()