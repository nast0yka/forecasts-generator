/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
/* Подставляй текст нового предсказания в .current-forecast h1 */
/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

function generate(min, max) {
    let a = Math.random() * (max - min) + min;
    return Math.round(a);
}

function generatePrediction() {
    switch (generate(1, 3)) {
        case 1:
            return "Ты решишь эту задачу";
        case 2:
            return "Ты наконец-то сделаешь тренажер без правок Полины";
        case 3:
            return "Ты будешь крутым Frontend-разработчиком";
    }
}

const currentForecast = document.querySelector('.current-forecast');
const forecastContainer = document.querySelector('.forecasts');

let button = document.querySelector('.forecast-btn');

button.addEventListener('click', function() {
    let a = generatePrediction()
    currentForecast.querySelector('h1').textContent = a;
    let b = `Вероятность ${generate(0, 100)} %`;
    currentForecast.querySelector('p').textContent = b;

    function createNewForecast(a, b) {
        const template = document.querySelector("#forecast-item");
        const newForeCast = template.content.cloneNode(true);
        newForeCast.querySelector('h3').textContent = a;
        newForeCast.querySelector('p').textContent = b;
        forecastContainer.append(newForeCast);
    }
    createNewForecast(a, b);
});