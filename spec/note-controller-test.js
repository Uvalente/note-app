(function(exports) {
  let controller

  function redirectToNotePage () {
    console.log('redirectToNotePage')
    controller = new NoteController()
    expect(controller.redirect()).toEqual('BOh')
  }

  function changeInnerHTML () {
    console.log('changeInnerHTML')
    let element = document.createElement('div')
    element.id = 'app'
    document.body.appendChild(element)
    controller = new NoteController(new NoteList)
    let note = new Note('test')
    controller.addNote(note)
    controller.displayNotes('app')
    text = `<ul><li><div><a href="#notes/${note.id}">test...</a></div></li></ul>`
    expect(element.innerHTML).toEqual(text)
    document.body.removeChild(element)
  }

  // DIFFERENT APPROACH TO MOCKING HTML
  // 
  // function changeInnerHTML2 () {
  //   console.log('changeInnerHTML')
  //   document.body.innerHTML = "<div id='app'></div>"
  //   element = document.getElementById('app')
  //   let note = new Note('test')
  //   text = `<ul><li><div><a href="#notes/${note.id}">test...</a></div></li></ul>`
  //   controller = new NoteController(new NoteList)
  //   controller.addNote(note)
  //   controller.displayNotes('app')
  //   expect(element.innerHTML).toEqual(text)
  // }

  changeInnerHTML()
  // changeInnerHTML2()
  // redirectToNotePage()
})(this)