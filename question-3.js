// Question #3
let userPassword = "ssswnalWadqQ";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
    const passwordLength = userPassword.length;
  
    if (passwordLength < 6) {
      return "Weak";
    } else if (passwordLength >= 6 && passwordLength <= 10) {
      return "Medium";
    } else {
      return "Strong";
    }
  }
  
  console.log(checkPasswordStrength(userPassword));