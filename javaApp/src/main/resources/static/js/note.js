const api = '/api/notes';

async function loadNotes() {
    const response = await fetch(api);
    const notes = await response.json();
    const list = document.getElementById('notesList');
    list.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note.content;
        list.appendChild(li);
    });
}

document.getElementById('noteForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const content = document.getElementById('noteInput').value.trim();
    if (!content) return;
    await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });
    document.getElementById('noteInput').value = '';
    loadNotes();
});

loadNotes();
