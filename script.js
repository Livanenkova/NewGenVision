  // Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Завожу переменные для html элементов
const priceMin =  document.querySelector('.priceMin');
const priceMax =  document.querySelector('.priceMax');
const button =  document.querySelector('.button');
const resultWrap =  document.querySelector('.result');

// Вывожу на экран спсиок всех курсов 
let coursesList = document.querySelector('.coursesList');
courses.forEach(el => coursesList.innerHTML += `<div>${el.name} </div>`);

// Создаю массив для хранения пользовательских данных
const userValue = [];

// Вешаю обработчик на кнопку чтобы при нажатии кнопки отслеживать ввод пользователя
button.addEventListener('click', (event) => {
  // Присваиваю переменным значение пользовательского ввода и заодно перевожу тип в число
  userValue[0] = Number(priceMin.value);
  userValue[1] = Number(priceMax.value);
  // Присваиваю переменной вызов функции в которой происходит сортировка.
  const getresult = gerCourse(userValue);
  // Передаю результат вызова функции сортировки в функцию вывода результата
  showResult(getresult);
});

// Функция выводящая результат на html страничку принимает массив и создает для каждого курса свой элемент
function showResult(arr) {
  console.log('Ответ', courses);
  arr.forEach(el => resultWrap.innerHTML += `<div>${el.name} </div>`);
}

// Функция сортировки принимает массив и возвращает другой массив, отсортированный
function gerCourse(arr) {
  // Деструктурирую переменные для удобства сравнения
  let [firstCellUser, SecondCellUser] = arr;
  // Создаю массив для хранения результата вычисления
  const result = [];
  // Нужно прости по все курсам в массиве - уже цикл - создаю его
  for( i = 0; i < courses.length; i ++) {
    // Для удобства присваиваю переменным стоимость из курса
    let firstCellCource = courses[i].prices[0];
    let secondCellCource = courses[i].prices[1];
    
    // Для сравнения меняю первые hull на ноль, а второй на ифинити
    firstCellUser === null ? firstCellUser = 0 : firstCellUser;
    SecondCellUser === null ? SecondCellUser = Infinity : SecondCellUser;
    firstCellCource === null  ? firstCellCource = 0 : firstCellCource;
    secondCellCource === null ? secondCellCource = Infinity : firstCellCource;
    // с помощью условия отбираю нужные курсы
    if( firstCellUser >= firstCellCource || SecondCellUser >= secondCellCource ||  firstCellUser >= secondCellCource || SecondCellUser >= firstCellCource) {
      // Результат пушу в новый массив созданный ранее
      result.push(courses[i]);
      }
  }
  // Возвращаю в место вызова массив с нужными курсами
  return result
}

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Можно потестировать пользовательский ввод уже реализованный на сайте или использовать вызовы функции ниже)
// gerCourse(requiredRange1);
// gerCourse(requiredRange2);
// gerCourse(requiredRange3);