  const addnotebtn = document.getElementById("addnotebtn");
        const notescontainer = document.getElementById("notescontainer");
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        function saveNotes() {
            localStorage.setItem("notes", JSON.stringify(notes));
        }
        function creatennoteelement(notecontent, noteId) {
            const noteDiv = document.createElement("div");
            noteDiv.classList.add("note");
            noteDiv.dataset.id = noteId;

            const textarea = document.createElement("textarea");
            textarea.value = notecontent;
            textarea.placeholder = "Write your note here..";
            textarea.addEventListener("input", (e) => {
                updateNote(noteId, e.target.value);
            });
            const deletebtn = document.createElement("button");
            deletebtn.classList.add("delet-btn");
            deletebtn.textContent = "delete";
            deletebtn.addEventListener("click", () => {
                deleteNotes(noteId);
            });
            noteDiv.appendChild(textarea);
            noteDiv.appendChild(deletebtn);
            return noteDiv;
        }
        function addnote() {
            const newnote = {
                id: Date.now(),
                content: ""
            };
            notes.push(newnote);
            notescontainer.appendChild(creatennoteelement(newnote.content, newnote.id));
            saveNotes();
        }
        function updateNote(id, newcontent) {
            const noteindex = notes.findindex(note => note.id == id);
            if (noteindex > -1) {
                notes[notesindex].content = newcontent;
                saveNotes();
            }
        }
        function deleteNotes(id) {
            notes = notes.filter(note => note.id !== id);
            const notetodelete = document.querySelector(`.note[data-id="${id}"]`);
            if (notetodelete) {
                notetodelete.remove();
            }
            saveNotes();
        }
        function loadnotes() {
            notes.foreach(note => {
                notescontainer.appendChild(creatennoteelement(note.content, note.id));
            });
        }
        addnotebtn.addEventListener("click", addnote);
        document.addEventListener("DOMContentloaded", loadnotes);