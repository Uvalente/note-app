(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.changeList = function(noteList) {
    return this.noteList = noteList
  }

  NoteListView.prototype.displayNotes = function() {
    let notes = this.noteList.viewAll()
    notes = notes.map(note => `<li><div><a href="#notes/${note.id}" id="${note.id}">`.concat(note.viewNote().slice(0,20), '...</a></div></li>'))
    return '<ul>'.concat(notes.join(''), '</ul>')
  }

  exports.NoteListView = NoteListView

})(this)