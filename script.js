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

const priceMin =  document.querySelector('.priceMin')
const priceMax =  document.querySelector('.priceMax')
const button =  document.querySelector('.button')
const resultWrap =  document.querySelector('.result')

console.log(priceMin)
console.log(priceMax)

const userValue = []

button.addEventListener('click', (event) => {
  userValue[0] = Number(priceMin.value);
  userValue[1] = Number(priceMax.value);
  const getresult = gerCourse(userValue)
  console.log(getresult)
  showResult(getresult)
});

function showResult(arr) {
  console.log(courses)
  arr.forEach(el => resultWrap.innerHTML += `<div>${el.name} </div>`);
}



// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

let coursesList = document.querySelector('.coursesList')
courses.forEach(el => coursesList.innerHTML += `<div>${el.name} </div>`);


function gerCourse(arr) {
let [firstCellUser, SecondCellUser] = arr;
const result = []
for( i = 0; i < courses.length; i ++) {
let firstCellCource = courses[i].prices[0];
let secondCellCource = courses[i].prices[1];

firstCellUser === null ? firstCellUser = 0 : firstCellUser;
SecondCellUser === null ? SecondCellUser = 0 : SecondCellUser;
firstCellCource === null  ? firstCellCource = 0 : firstCellCource;
secondCellCource === null ? secondCellCource = Infinity : firstCellCource;

if( firstCellUser >= firstCellCource || SecondCellUser >= secondCellCource ||  firstCellUser >= secondCellCource || SecondCellUser >= firstCellCource) {
result.push(courses[i]);

  }

} 
  return result
}
