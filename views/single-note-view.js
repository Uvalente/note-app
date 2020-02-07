(function(exports) {
  function SingleView() {
  }

  SingleView.prototype.display = function (note) {
    return '<div>'.concat(note.viewNote(), '</div>')
  }

  exports.SingleView = SingleView
})(this)