let money = +prompt('Ваш бюджет на месяц?', ' '),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

for (let i = 0; i < 2; i++){
    let a = prompt('Ввдеите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется ?', '');
    if ((typeof (a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    }else {
        i = i - 1;
    }
}

// let i = 0;
// while (i < 2){
//     console.log(i);
//     i++;
    // let a = prompt('Ввдеите обязательную статью расходов в этом месяце', ''),
    //     b = prompt('Во сколько обойдется ?', '');
    // if ((typeof (a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null
    // && a != '' && b != '' && a.length < 50) {
    //     console.log('done');
    //     appData.expenses[a] = b;
    // }else {
    //     console.log('Заполните цифрами и не оставляете поля пустыми!');   
    // }
// };

// let i = 0;
// do {
//     console.log(i);
//     i++; 
//     let a = prompt('Ввдеите обязательную статью расходов в этом месяце', ''),
//         b = prompt('Во сколько обойдется ?', '');
//     if ((typeof (a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     }else {
//         console.log('Заполните цифрами и не оставляете поля пустыми!');   
//     }
// }
// while (i < 2);


appData.moneyPerDay = appData.budjet / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log('Минимальный уровень достатка');
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка')  
}