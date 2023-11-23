// -------------------ДЗ 17.1---------------------
function trimString(str, maxLength) {
  if (!str) {
    alert("Ви не ввели символів,спробуйте ще раз!");
  } else {
    let long = str.length;

    let trueLong = str.slice(0, maxLength);

    let falseLong = "...";

    if (long > maxLength) {
      console.log(`${trueLong}${falseLong}`);
    } else {
      console.log(trueLong);
    }
  }
}

trimString(prompt("Введіть будь-які символи"), 8);

// Варіант коротше-----
// function truncate(str, maxlength) {
//   return str.length > maxlength ? str.slice(0, maxlength) + "…" : str;
// }

// console.log(truncate(prompt("enter text"), 8));

// ------------------ДЗ 17.2-----------------------

// -----Варіант 1 (довший)---------
// function getRandom(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// let number = getRandom(-1e3, 1e3);
// console.log(number);

// function checkNumber(number) {
//   if (number % 2 === 0) {
//     return "parne";
//   } else {
//     return "no";
//   }
// }

// console.log(checkNumber(number));
// --------------------------

// -----Варіант 2 (коротший)---------

function checkRandNumb(min, max) {
  if (min && max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min)) + min;
    console.log(number);
    if (number % 2 === 0) {
      console.log("Число парне");
    } else if (number % 2 != 0) {
      console.log("Число непарне");
    }
  } else if (!min || !max) {
    alert("Некоректне значення, спробуйте ще раз");
  }
}

checkRandNumb(
  +prompt("Введіть мінімальне число діапазону рандому"),
  +prompt("Введіть максималне число діапазону рандому")
);

// ------Варіант 3 (діапазон йде від 0 до max)----

// function checkRandom(max) {
//   let number = Math.floor(Math.random() * max);
//   console.log(number);

//   if (number % 2 === 0) {
//     return "parne";
//   } else {
//     return "no";
//   }
// }

// console.log(checkRandom(100));

// -------
