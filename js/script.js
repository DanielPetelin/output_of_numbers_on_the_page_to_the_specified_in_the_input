// создаем функцию при нажатии на кнопку.
document.getElementById('print').onclick = function() {
    var numbers = document.getElementById('text').value;
    var out = '';

    for (var i = 0; i < numbers; i++) {
        out += i + ' ';
    };

    // выводим на страницу ответ
    document.getElementById('out').innerHTML = out;
};