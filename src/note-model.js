(function(exports) {
  let id = 0
  function Note(text) {
    this.text = text
    this.id = id++
  }

  Note.prototype.viewNote = function () {
    return this.text
  }
  exports.Note = Note
})(this)