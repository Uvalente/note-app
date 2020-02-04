(function(exports) {
  function SingleView(note) {
    this.note = note
  }

  SingleView.prototype.display = function () {
    return '<div>'.concat(this.note.viewNote(), '</div>')
  }

  exports.SingleView = SingleView
})(this)