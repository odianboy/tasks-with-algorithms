"use strict";

function dscount(str, s1, s2) {
    let find = (s1 + s2).toLowerCase()
    let count = 0;
    let pos = -1;

    while ((pos = str.toLowerCase().indexOf(find, pos + 1)) != -1) {
        count++;
    }
    return count;
}

// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info('Все тесты прошли!');
} catch(e) {
    console.error(e);
}
// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Кол-во совпадений: ${count}`);
    if (!r) throw 'Тест не пройден!';
}
