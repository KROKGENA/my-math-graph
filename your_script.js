// Данные для графика
let walkingSpeed = 4; // Скорость пешком (по умолчанию 4 км/ч)
let scooterSpeed = 15; // Скорость на самокате (по умолчанию 15 км/ч)
let distance = 40; // Расстояние (по умолчанию 40 км)

// Функция для обновления графика
function updateChart() {
    // Ваш код для обновления графика с новыми данными скоростей и расстояния
    // ...

    // Перерисовка графика
    // ...

    // Расчет времени и отображение его на странице
    calculateTime();
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

// Функция для расчета времени и отображения его на странице
function calculateTime() {
    // Расчет времени в часах, минутах и секундах для пешком и на самокате
    let walkingTime = distance / walkingSpeed;
    let scooterTime = distance / scooterSpeed;

    // Преобразование времени в формат "чч:мм:сс"
    let formattedWalkingTime = formatTime(walkingTime);
    let formattedScooterTime = formatTime(scooterTime);

    // Отображение времени на странице
    document.getElementById('walkingTime').innerText = formattedWalkingTime;
    document.getElementById('scooterTime').innerText = formattedScooterTime;
}

// Функция для форматирования времени в формат "чч:мм:сс"
function formatTime(time) {
    let hours = Math.floor(time);
    let minutes = Math.floor((time - hours) * 60);
    let seconds = Math.floor(((time - hours) * 60 - minutes) * 60);
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

// Вызов функции для обновления графика и расчета времени при загрузке страницы
updateChart();
calculateTime();
