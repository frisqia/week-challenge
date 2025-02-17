// Tulis fungsi JavaScript bernama `sumClassifier` yang menggunakan array angka sebagai argumen.
// Fungsi tersebut harus mengklasifikasikan jumlah angka ke dalam tiga kategori:

// - Jika jumlah angkanya lebih besar dari 10, kembalikan "Large Sum".
// - Jika jumlahnya sama dengan 10, kembalikan "Equal Sum".
// - Jika tidak, kembalikan "Small sum".

// - Fungsi tersebut harus diberi nama `sumClassifier`.
// - Ini harus mengambil satu parameter: `angka`, yang merupakan array angka.
// - Fungsi harus mengembalikan string yang mewakili klasifikasi jumlah berdasarkan kondisi di atas.

function sumClassifier(numbers) {
  // Your code here

  let sum = 0; // var sum bernilai 0
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  let result = "Small Sum";
  if (sum > 10) {
    // jika sum lebih dari  10 maka akan menghasilkan Large sum
    result = "Large Sum";
  } else if (sum === 10) {
    //jika tidak sama dengan 10 maka akan menghasikan equal sum
    result = "Equal Sum";
  }
  return result; // hasil dari  variabel result akan menampilkan small sum
}
console.log(sumClassifier([(1, 3, 5)])); // Output: "Small Sum"
console.log(sumClassifier([10])); // Output: "Equal Sum"
console.log(sumClassifier([(11, 13, 15)])); // Output: "Large Sum"

// function sumClassifier(numbers) {
//   var sum = numbers[0];
//   // console.log(sum) 11
//   switch (true) {
//     case sum > 10: {
//       console.log("Equal sum");
//       break;
//     }
//     case sum === 10: {
//       console.log("Large sum");
//       break;
//     }
//     case sum === 10: {
//       console.log("small sum");
//       break;
//     }
//   }
// }

// console.log(sumClassifier([1, 2, 3, 5])); // Output: "Large Sum"
// console.log(sumClassifier([5, 5])); // Output: "Equal Sum"
// console.log(sumClassifier([0, 1, 2])); // Output: "Small Sum"
module.exports = sumClassifier;
