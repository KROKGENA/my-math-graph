// Данные для графика
let walkingSpeed = 4; // Скорость пешком (по умолчанию 4 км/ч)
let scooterSpeed = 15; // Скорость на самокате (по умолчанию 15 км/ч)

// Функция для обновления графика
function updateChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Пешком', 'Самокат'],
            datasets: [{
                label: 'Скорость (км/ч)',
                data: [walkingSpeed, scooterSpeed],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Функции для изменения скоростей с помощью стрелок
function increaseWalkingSpeed() {
    walkingSpeed += 1;
    updateChart();
}

function decreaseWalkingSpeed() {
    walkingSpeed -= 1;
    updateChart();
}

function increaseScooterSpeed() {
    scooterSpeed += 1;
    updateChart();
}

function decreaseScooterSpeed() {
    scooterSpeed -= 1;
    updateChart();
}

// Вызов функции для обновления графика при загрузке страницы
updateChart();
