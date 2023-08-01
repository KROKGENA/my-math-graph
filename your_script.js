// Данные для графика
let walkingSpeed = 4; // Скорость пешком (по умолчанию 4 км/ч)
let scooterSpeed = 18; // Скорость на самокате (по умолчанию 18 км/ч)
let distance = 10.1; // Расстояние (по умолчанию 10.1 км)

// Функция для обновления графика
function updateChart() {
    let walkingTime = calculateTime(distance, walkingSpeed);
    let scooterTime = calculateTime(distance, scooterSpeed);

    let walkingChartCtx = document.getElementById('walkingChart').getContext('2d');
    let scooterChartCtx = document.getElementById('scooterChart').getContext('2d');

    let walkingChart = new Chart(walkingChartCtx, {
        type: 'bar',
        data: {
            labels: ['Время (пешком)'],
            datasets: [{
                label: 'Время (пешком)',
                data: [walkingTime],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    let scooterChart = new Chart(scooterChartCtx, {
        type: 'bar',
        data: {
            labels: ['Время (на самокате)'],
            datasets: [{
                label: 'Время (на самокате)',
                data: [scooterTime],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
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
    document.getElementById('walkingSpeedValue').innerText = walkingSpeed;
    updateChart();
}

function decreaseWalkingSpeed() {
    walkingSpeed -= 1;
    document.getElementById('walkingSpeedValue').innerText = walkingSpeed;
    updateChart();
}

function increaseScooterSpeed() {
    scooterSpeed += 1;
    document.getElementById('scooterSpeedValue').innerText = scooterSpeed;
    updateChart();
}

function decreaseScooterSpeed() {
    scooterSpeed -= 1;
    document.getElementById('scooterSpeedValue').innerText = scooterSpeed;
    updateChart();
}

// Функция для изменения расстояния
function updateDistance() {
    distance = parseFloat(document.getElementById('distanceInput').value);
    updateChart();
}

// Функция для расчета времени
function calculateTime(distance, speed) {
    let timeInHours = distance / speed;
    let hours = Math.floor(timeInHours);
    let minutes = Math.floor((timeInHours - hours) * 60);
    let seconds = Math.floor(((timeInHours - hours) * 60 - minutes) * 60);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Вызов функции для обновления графика при загрузке страницы
updateChart();
