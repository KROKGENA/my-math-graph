// Данные для графика
let walkingSpeed = 4; // Скорость пешком (по умолчанию 4 км/ч)
let scooterSpeed = 17; // Скорость на самокате (по умолчанию 17 км/ч)
let distance = 10.1; // Расстояние (по умолчанию 10.1 км)

// Функция для обновления графика
function updateChart() {
    // Отрисовка графика
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Пешком', 'На самокате'],
            datasets: [{
                label: 'Время',
                data: [calculateTime(distance, walkingSpeed), calculateTime(distance, scooterSpeed)],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
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
