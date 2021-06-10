// ДЗ

// Написать аналог клaсса Math;
// - min
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(`MIN:${min(5, 15)}`);

// - max
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(`MAX: ${max(5, 15)}`);

// - power;
function power(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log(`POWER: ${power(5, 2)}`);

// - sqrt проверку на целое число не делал, работает только для целых чисел
function sqrt(a) {
  for (let i = 0; i <= a; i++) {
    if (i * i == a) {
      return i;
    }
  }
}
console.log(`SQRT: ${sqrt(9)}`);
console.log(`Check: ${Math.sqrt(9)}`);
// - range

// Целое рендомное число от a до b (включая a и b)

function range(min, max) {
  let i;
  i = Math.floor(Math.random() * max) + min;
  if (i >= min && i <= max) {
    return i;
  }
}

console.log(`Целое рендомное число от 2 до 9 (включая 2 и 9): ${range(2, 9)}`); // 2, 9, 8, 7, 6, 5, 4, 3
