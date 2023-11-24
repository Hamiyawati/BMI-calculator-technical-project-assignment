function calculateBMI() {
  let weight = document.getElementById('weight').value;
  let height = document.getElementById('height').value;

  // Validasi input ketika box kosong
  if (weight === '' || height === '') {
    alert('Please enter both weight and height.');
    return;
  }

  // Validasi angka yang dimasukkan ketika tidak realistik
  if (weight > 500 || height > 300) {
    alert('Please enter realistic weight and height.');
    return;
  }

  // Menghitung BMI
  let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

  // Validasi kategori BMI
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    } else if (bmi >= 30 && bmi < 34.9) {
      return "Obese (Class 1)";
    } else if (bmi >= 35 && bmi < 39.9) {
      return "Obese (Class 2)";
    } else {
      return "Obese (Class 3)";
    }
  }

  let category = getBMICategory(bmi);

  // Menampilkan result
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = 'Your BMI is <strong>' + bmi + '</strong> which means You are ' + category;

  // Reset formulir
  document.getElementById('bmiForm').reset();
}
