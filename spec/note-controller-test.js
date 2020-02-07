(function(exports) {
  let controller

  function redirectToNotePage () {
    console.log('redirectToNotePage')

    let element = document.createElement('div')
    element.id = 'app'
    document.body.appendChild(element)

    let note = new Note('test note number 1')
    controller = new NoteController(new NoteList, new NoteListView, new SingleView)
    controller.addNote(note)
    controller.addNote(new Note('terere'))
    controller.displayNotes('app')
    
    document.getElementById(`${note.id}`).click()
    controller.redirect()
    expect(location.hash).toEqual(`#notes/${note.id}`)
    expect(element.innerHTML).toEqual("<div>test note number 1</div>")
    document.body.removeChild(element)
  }

  function changeInnerHTML () {
    console.log('changeInnerHTML')
    let element = document.createElement('div')
    element.id = 'app'
    document.body.appendChild(element)
    controller = new NoteController(new NoteList, new NoteListView)
    let note = new Note('test')
    controller.addNote(note)
    controller.displayNotes('app')
    text = `<ul><li><div><a href="#notes/${note.id}" id="${note.id}">test...</a></div></li></ul>`
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
  redirectToNotePage()
})(this)