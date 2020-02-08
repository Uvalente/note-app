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
    console.log(this)
    window.addEventListener("hashchange", () => {this.displaySingleNote()})
  }

  NoteController.prototype.displaySingleNote = function () {
    if (window.location.hash === "") {
      this.displayNotes('app')
    } else {
      console.log(this)
      this.showNote(this.getNoteIdFromUrl(window.location))
    }
  }

  NoteController.prototype.getNoteIdFromUrl = function (location) {
    return location.hash.split('#notes/')[1]
  }

  NoteController.prototype.showNote = function (note) {
    document.getElementById('app').innerHTML = this.singleView.display(this.noteList.findNote(note))
  }

  NoteController.prototype.returnFormValue = function () {
    form = document.getElementById('text')
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      this.addNote(new Note(event.target.elements[0].value))
      this.displayNotes('app')
    })
  }

  exports.NoteController = NoteController
})(this)

let controller = new NoteController(new NoteList, new NoteListView, new SingleView)
let note1 = new Note('test note number 1')
let note2 = new Note('test note number 2')

controller.redirect()
controller.addNote(note1)
controller.addNote(note2)
controller.displayNotes('app')
controller.returnFormValue()