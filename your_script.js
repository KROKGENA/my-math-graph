// Данные для графика
const speeds = ['Пешком', 'Самокат'];
const values = [4, 15]; // Скорости в км/ч

// Функция для создания графика
function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: speeds,
            datasets: [{
                label: 'Скорость (км/ч)',
                data: values,
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

// Вызов функции для создания графика
createChart();
