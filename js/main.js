/**
*Генерация случайного числа
*@param {int} min – минимальное число диапазона 
*@param {int} max– максимальное число диапазона
*@return {int} – случайное число
*/

function getRndInteger(min, max) {
    if (min < 0 || max < 0) {
        return ('Числа в диапазоне должны быть положительные!')
    }

    if (min > max) {
        [min, max] = [max, min]
    }
    return Math.round(Math.random() * (max - min)) + min;
};

/**
*Проверка максимальной длины строки
*@param {int} string – проверяемая строка 
*@param {int} maxLength– максимальная длина
*/

function checkLength(string, maxLength) {
    if (string.length <= maxLength) {
        return true
    }
    return false
};
