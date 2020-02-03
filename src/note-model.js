(function(exports) {
  function Note(text) {
    this.text = text
  }

  Note.prototype.viewNote = function () {
    return this.text
  }
  exports.Note = Note
})(this)