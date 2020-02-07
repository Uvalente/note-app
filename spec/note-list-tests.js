(function(exports) {
  var noteList

  function addNoteToArray() {
    noteList = new NoteList()
    console.log('addNoteToArray')
    noteList.addNote(new Note('note1'))

    expect(noteList.list[0].viewNote()).toEqual('note1')
  }

  function viewAllNotes() {
    noteList = new NoteList()
    console.log('viewAllNotes')
    noteList.addNote(new Note('note1'))
    expect(noteList.viewAll()[0]).toBe(new Note)
  }

  function findNote() {
    noteList = new NoteList()
    console.log('findNote')
    note = new Note('note1')
    noteList.addNote(note)
    expect(noteList.findNote(note.id)).toBe(new Note)
    expect(noteList.findNote(note.id).viewNote()).toEqual('note1')
  }

  addNoteToArray()
  viewAllNotes()
  findNote()
})(this)