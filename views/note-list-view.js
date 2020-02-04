(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.displayNotes = function() {
    let notes = this.noteList.viewAll()
    notes = notes.map(note => '<li><div>'.concat(note.viewNote().slice(0,20), '...</div></li>'))
    return '<ul>'.concat(notes.join(''), '</ul>')
  }

  exports.NoteListView = NoteListView

})(this)