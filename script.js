// Store habits in an array
let habits = [];

// DOM elements
const habitListElement = document.getElementById('habitList');
const newHabitInput = document.getElementById('newHabit');
const addHabitButton = document.getElementById('addHabitButton');
const saveButton = document.getElementById('saveButton');
const statusElement = document.getElementById('status');

// Function to render the habit list
function renderHabitList() {
    habitListElement.innerHTML = ''; // Clear the list before re-rendering
    habits.forEach((habit, index) => {
        const habitItem = document.createElement('li');
        habitItem.classList.add('habit-item');

        // Create checkbox and label
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = habit.completed;
        checkbox.addEventListener('change', () => updateHabitStatus(index));

        const label = document.createElement('label');
        label.textContent = habit.name;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteHabit(index));

        // Append elements to the habit item
        habitItem.appendChild(checkbox);
        habitItem.appendChild(label);
        habitItem.appendChild(deleteButton);

        // Append the habit item to the list
        habitListElement.appendChild(habitItem);
    });
}

// Function to add a new habit
function addHabit() {
    const habitName = newHabitInput.value.trim();
    if (habitName) {
        habits.push({ name: habitName, completed: false });
        newHabitInput.value = ''; // Clear the input field
        renderHabitList();
    } else {
        alert('Please enter a habit name.');
    }
}

// Function to update the status of a habit
function updateHabitStatus(index) {
    habits[index].completed = !habits[index].completed;
    renderHabitList();
}

// Function to delete a habit
function deleteHabit(index) {
    habits.splice(index, 1); // Remove the habit from the array
    renderHabitList();
}

// Function to save progress
function saveProgress() {
    const progress = habits.map(habit => {
        return { habit: habit.name, completed: habit.completed };
    });

    statusElement.innerHTML = `<strong>Progress Saved:</strong><br><ul>
        ${progress.map(item => `<li>${item.habit}: ${item.completed ? 'Completed' : 'Not Completed'}</li>`).join('')}
    </ul>`;
}

// Event Listeners
addHabitButton.addEventListener('click', addHabit);
saveButton.addEventListener('click', saveProgress);

// Initial render
renderHabitList();
