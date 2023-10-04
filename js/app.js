
// 1. вывести одной строкой минимальное значние массива array с помощью деструктуризации и Math
const array = [1,2,3,4,6,710,34013,13];
Math.min(...array);

// 2.функция multiply не принимает явно никаких параметров
function multiply(...numbers) {
 return numbers.reduce((sum, curr) => sum * curr);
}

//multiply(100,200,83902,1230) // В результате фукнции должно вернутся число, которое является результатом умножения всех аргументов переданых в функцию

// 3. У нас есть фукниця totalPrice, с помощью деструктуризации объекта сделать так, 
//что б функция работала.
const product = {
  productName: 'Water',
  price: 20,
  count: 3
}

function totalPrice(item) {
  const {price, count} = item;
  return price * count;
}

//4. написать объект в котором будет свойство items (изначально пустой массив), 
// метод объекта setItems который принимает массив значений и устанавливает этот
// массив как значение свойста items
// метод объекта sum котроый возвращает сумму всех элементов массива items 
// метод maxValue который возвращает максимальное значение из массива items с 
//использованием деструктуризации массива.

const any = {
  items:[],
  setItems() {
    return this.items = (arguments);
  },
  sum(){
    items = Array.from(this.items);
    return items.reduce((acc, curr) => acc + curr);
  },
  maxValue(){
    return Math.max(...this.items);
  }
}


// 5. Написать функционал что б при вызове showPrediction выводилась случайная фраза
// из массива predictsArr1 для predictions1 и predictsArr2 для predictions2

const predictsArr1 = [
    'Удача придет откуда не ждете.',
    'Давние долги будут возвращены вам.',
    'Вас ожидает неожиданное денежное поступление.',
    'Все неоконченные дела будут завершены.',
    'Яркое приключение уже поджидает вас.',
    'Планирование времени поможет вам не опоздать на встречу.',
    'Интуиция на этот раз не подведет вас. Используйте это.',
    'Прислушайтесь к себе и ответ на вопрос будет найден.',
    'Появится возможность отправиться в дорогу.',
    'Ваш ценный опыт сможет кому-то помочь, если перестанете его прятать в себе.',
    'Вам не удастся понравиться абсолютно всем, не тратьте на это энергию.',
    'Одежда, которая вас старит, не достанется вам.'
  ]
  
//const predictsArr2 = predictsArr1.map(x => x);
//const predictsArr2 = [...predictsArr1];
const predictsArr2 = [
    'Овен',
    'Телец',
    'Близнецы',
    'Рак',
    'Лев',
    'Дева',
    'Весы',
    'Скорпион',
    'Стрелец',
    'Козерог',
    'Водолей',
    'Рыбы'
  ]
const obj = {
    predictions: [],
        setPredictions(arr) {
          const index = Math.floor(Math.random() * arr.length);
          return arr[index];
        },
        showPrediction1() {
          const predictions1 = this.setPredictions(predictsArr1);
          return this.predictions.push(predictions1);
        },
        showPrediction2() {
          const predictions2 = this.setPredictions(predictsArr2);
          return this.predictions.push(predictions2);
        },
        
}
const predictions = obj;
predictions.showPrediction2(predictsArr2);
predictions.showPrediction1(predictsArr1);
console.log(predictions.predictions.join('      '));

