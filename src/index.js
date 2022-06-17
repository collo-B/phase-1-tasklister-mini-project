document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let doc = document.getElementById('create-task-form')
  doc.addEventListener('submit', function(event){
    event.preventDefault()
    p = document.createElement('p');
    p.textContent = `${event.target['new-task-description'].value} `
    button = document.createElement('button')
    button.textContent = 'X'
    doc.appendChild(p)
    p.appendChild(button)

    // delete
    button.addEventListener('click', function(event){
      event.target.parentNode.remove()
    })
   
  })
});
