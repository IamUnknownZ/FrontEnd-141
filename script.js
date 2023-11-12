document.addEventListener('DOMContentLoaded', function () {


    // Interactive exercises toggle
    document.querySelectorAll('.exercise').forEach(exercise => {
        const button = document.createElement('button');
        button.textContent = 'Toggle Exercise';
        button.classList.add('exercise-toggle');

        button.addEventListener('click', function () {
            const content = exercise.querySelector('p');
            content.classList.toggle('hidden');
        });

        exercise.appendChild(button);
    });
});


window.checkQuiz = function (quizName, hintId) {
    const quiz = document.querySelector(`input[name=${quizName}]:checked`);

    if (quiz) {
        if (quiz.value === 'correct') {
            alert('ถูกต้องละค้าบบบบ');
            document.getElementById(hintId).innerHTML = ''; // Clear hint if the answer is correct
        } else {
            alert('แอ้ดๆ!ผิดนะครับ ลองใหม่อีกทีนะ..');
        }
    } else {
        alert('Please select an answer before submitting.');
    }
};
// Interactive toggle functionality
document.querySelectorAll('.interactive-toggle').forEach(toggleButton => {
    toggleButton.addEventListener('click', function () {
        const interactiveContent = this.nextElementSibling;
        interactiveContent.classList.toggle('hidden');
    });
});
function toggleInteractiveSection(hintId, buttonId) {
    var hint = document.getElementById(hintId);
    var button = document.getElementById(buttonId);

    if (hint.style.display === 'none') {
        hint.style.display = 'block';
        button.innerHTML = 'Hide Interactive Section';
    } else {
        hint.style.display = 'none';
        button.innerHTML = 'Show Interactive Section';
    }
}