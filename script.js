document.getElementById('habit-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const habitInput = document.getElementById('habit-input');
    const habitList = document.getElementById('habit-list');

    if (habitInput.value) {
        const li = document.createElement('li');
        li.textContent = habitInput.value;

        habitList.appendChild(li);
        habitInput.value = '';
    }
});
