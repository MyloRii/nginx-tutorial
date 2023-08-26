async function fetchNames() {
    try {
        const response = await fetch('/api/random-names');
        const names = await response.json();

        const namesList = document.getElementById('names-list');
        namesList.innerHTML = names.map(name => `<li>${name}</li>`).join('');
    } catch (error) {
        console.error('Error fetching names:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchNames();
});

