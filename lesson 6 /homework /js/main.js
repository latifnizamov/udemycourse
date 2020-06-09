let start = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    yearValue = document.getElementsByClassName('year-value'),
    monthValue = document.getElementsByClassName('month-value'),
    dayValue = document.getElementsByClassName('day-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValueEl = document.querySelector('.year-value'),
    monthValueEl = document.querySelector('.month-value'),
    dayValueEl = document.querySelector('.day-value');

    let money, time;


start.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    money = +prompt('Ваш бюджет на месяц?', ' '); 
    

    while (isNaN(money) || money == '' || money == null){
        money = +prompt('Ваш бюджет на месяц?', ' ');
    }
    appData.budget = money;
    appData.timeData = time;  
    budgetValue.textContent = money.toFixed();
    yearValueEl.value = new Date(Date.parse(time)).getFullYear();
    monthValueEl.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValueEl .value = new Date (Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a) )=== 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b
        } else {
            i = i - 1;
        }
    } 
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for(let i = 0; i < optionalExpensesItem.length; i++){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
    }
});

countBudgetBtn.addEventListener('click', function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;

    if(appData.budget != undefined) {
        if (appData.moneyPerDay < 100){
            levelValue.textContent = 'Минимальный уровень достатка';
        }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000){
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка'; 
        }
    }else{
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function() {
    if(appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);    
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
};

