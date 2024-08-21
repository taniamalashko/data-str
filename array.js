let arr = [1, true, 'i am string', [1, 2, 3], {name: 'Tanya', surname: 'Malashko', }, ];

//получение из начала, конца, середины по индексу
console.log(arr[2]);
console.log(arr[arr.length - 1]);
console.log(arr[0]);

//удаление из начала, середины, конца
arr.shift();
arr.pop();
arr.splice(1, 1);
console.log(arr);

//добавление в начало, середину, конец
arr.unshift(1);
arr.push({name: 'Tanya', surname: 'Malashko', });
arr.splice(2, 0, 'i am string');
console.log(arr);
