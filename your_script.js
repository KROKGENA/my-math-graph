// Данные для графиков
let walkingSpeed = 4; // Скорость пешком (по умолчанию 4 км/ч)
let scooterSpeed = 15; // Скорость на самокате (по умолчанию 15 км/ч)
let distance = 10.1; // Расстояние (по умолчанию 10.1 км)

// Функция для обновления графиков
function updateCharts() {
    // Создаем график для времени пешком
    let walkingCtx = document.getElementById('walkingChart').getContext('2d');
    let walkingTime = distance / walkingSpeed;
    let walkingChart = new Chart(walkingCtx, {
        type: 'bar',
        data: {
            labels: ['Пешком'],
            datasets: [{
                label: 'Время',
                data: [walkingTime],
                backgroundColor: ['#FF6384'],
                borderColor: '#000',
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

    // Создаем график для времени на самокате
    let scooterCtx = document.getElementById('scooterChart').getContext('2d');
    let scooterTime = distance / scooterSpeed;
    let scooterChart = new Chart(scooterCtx, {
        type: 'bar',
        data: {
            labels: ['На самокате'],
            datasets: [{
                label: 'Время',
                data: [scooterTime],
                backgroundColor: ['#36A2EB'],
                borderColor: '#000',
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

    // Обновляем время на странице
    calculateTime();
}

// ... (ваш код остается без изменений)

// Вызов функции для обновления графиков и расчета времени при загрузке страницы
updateCharts();
calculateTime();
