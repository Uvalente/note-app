(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNote = function (note) {
    this.list.push(new Note(note))
  }

  NoteList.prototype.viewAll = function () {
    return this.list
  }

  exports.NoteList = NoteList
})(this)