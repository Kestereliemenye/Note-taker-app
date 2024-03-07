let addBtn = document.querySelector('.input-button');
let mainDiv = document.querySelector('.inner-container');
let mainDiv2 = document.querySelector('.second-inner-container');



function addNotes(){
    let inputValue = document.querySelector('.input-note').value;
    let notesDiv = document.createElement('div');//created a div for each note
    notesDiv.className = 'divForNotes';//gave the divv a class
    let noteText = document.createTextNode(inputValue);


    ;//created a button to view the full details of the note
    let viewbtn = document.createElement('input')
    viewbtn.className = 'view-btn';
    viewbtn.setAttribute('type', 'button');
    viewbtn.setAttribute('value', 'View Details');

    //created a button to clear the notediv
    let delteNote = document.createElement('input');
    delteNote.className = 'del-btn';
    delteNote.setAttribute('type', 'button');
    delteNote.setAttribute('value', 'x');

    //functions for the delete note
    function delNote(){
        notesDiv.remove();
    };
    delteNote.addEventListener('click', delNote)

    //funnctions for the view details
    function viewDetails(){
        let details = document.createElement('div');
        let closeDetailsBtn = document.createElement('input');
        closeDetailsBtn.className = 'close-details';
        closeDetailsBtn.setAttribute('type', 'button');
        closeDetailsBtn.setAttribute('value', 'X');
        details.className = 'popup';
        let notesText2 = document.createTextNode(inputValue);
        details.appendChild(closeDetailsBtn);
        details.appendChild(notesText2)
        document.body.appendChild(details)
        function closeDetails (){
            details.remove()
        }
        closeDetailsBtn.addEventListener('click', closeDetails)
    }
    viewbtn.addEventListener('click', viewDetails);


    notesDiv.appendChild(delteNote)
    notesDiv.appendChild(viewbtn); 
    notesDiv.appendChild(noteText);//appended the text node to the div
    mainDiv2.append(notesDiv);//appended the newly create div to the main div it should be 
    document.querySelector('.input-note').value = '';

}

addBtn.addEventListener('click', addNotes);