// Get elements
const saveButton = document.getElementById('saveButton');
const status = document.getElementById('status');

// Function to update habit status
function saveHabitProgress() {
    const habits = document.querySelectorAll('.habit-item input[type="checkbox"]');
    let completedHabits = 0;

    habits.forEach(habit => {
        if (habit.checked) {
            completedHabits++;
        }
    });

    if (completedHabits === habits.length) {
        status.textContent = 'All habits completed today!';
        status.style.color = 'green';
    } else {
        status.textContent = `${completedHabits} out of ${habits.length} habits completed.`;
        status.style.color = 'orange';
    }
}

// Event listener for Save button
saveButton.addEventListener('click', saveHabitProgress);
