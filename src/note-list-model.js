(function(exports) {
  function NoteList() {
    this.list = []
  }

  NoteList.prototype.addNote = function (note) {
    this.list.push(note)
  }

  NoteList.prototype.findNote = function (id) {
    return this.list.find( note => note.id == id)
  }

  NoteList.prototype.viewAll = function () {
    return this.list
  }

  exports.NoteList = NoteList
})(this)