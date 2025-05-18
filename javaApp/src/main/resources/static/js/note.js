const api = '/api/notes';

async function loadNotes() {
    try {
        const response = await fetch(api);
        if (!response.ok) {
            console.error(`Failed to fetch notes: ${response.status}`);
            return;
        }

        const notes = await response.json();
        const list = document.getElementById('notesList');
        list.innerHTML = '';

        if (Array.isArray(notes)) {
            notes.forEach(note => {
                const li = document.createElement('li');
                li.textContent = note.content;
                list.appendChild(li);
            });
        } else {
            console.error("Invalid response format:", notes);
        }
    } catch (error) {
        console.error("Error loading notes:", error);
    }
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
