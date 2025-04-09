const gridContainer = document.getElementById('grid');

if (gridContainer) {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        gridContainer.appendChild(cell);
    }
}

let guesses = 9;
document.getElementById("guesses").textContent = guesses;

const cells = document.querySelectorAll(".cell");
const playerInput = document.getElementById("playerInput");

const cols = ["cat", "cat2", "cat3"];
const rows = ["cat4", "cat5", "cat6"];


if (document.getElementById("c0")) {
    document.getElementById("c0").textContent = cols[0];
}
if (document.getElementById("c1")) {
    document.getElementById("c1").textContent = cols[1];
}
if (document.getElementById("c2")) {
    document.getElementById("c2").textContent = cols[2];
}
if (document.getElementById("r0")) {
    document.getElementById("r0").textContent = rows[0];
}
if (document.getElementById("r1")) {
    document.getElementById("r1").textContent = rows[1];
}
if (document.getElementById("r2")) {
    document.getElementById("r2").textContent = rows[2];
}

cells.forEach(cell => {
    cell.addEventListener("click", function () {
        inputContainer.classList.remove('hidden');
        playerInput.focus();
        playerInput.dataset.selectedCell = this.dataset.index;
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key == 'Enter') {
        inputContainer.classList.add('hidden');
    }
});

if (playerInput) {
    playerInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && this.value != "") {
            guesses--;
            document.getElementById("guesses").textContent = guesses;
            const selectedCellIndex = this.dataset.selectedCell;
            if (selectedCellIndex !== undefined) {
                const selectedCategories = [];
                let index = parseInt(selectedCellIndex);

                // this.value is the guess -> check that

                // check guess correct in both of categories:
                // cols[index%3]
                // rows[(index-(index%3))/3]

                // if correct, push player name/picture onto cell
                // selectedCategories.push(____)
                selectedCategories.push(this.value);
                selectedCategories.push(cols[index%3]);
                selectedCategories.push(rows[(index-(index%3))/3]);

                cells[selectedCellIndex].textContent = selectedCategories.join(", ");
                this.value = ""; // Clear input field
            }
        }
    });
}






