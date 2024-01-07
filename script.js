var btn = document.querySelector(".input_form>button");
var dateOfBirth = document.querySelector(".input_form>input");
var birthText = document.getElementById("result");
var message = document.getElementById("last");
btn.addEventListener("click", () => {
  var bDay = new Date(dateOfBirth.value);
  var presentDate = new Date();
  let d1 = bDay.getDate();
  let m1 = bDay.getMonth() + 1;
  let y1 = bDay.getFullYear();
  // console.log(d1,m1,y1);
  let d2 = presentDate.getDate();
  let m2 = presentDate.getMonth();
  let y2 = presentDate.getFullYear();
  // console.log(d2,m2,y2);
  var years = y2 - y1;
  let months = m2 - m1;
  let days = 0;
  if (m2 >= m1) {
    months = m2 - m1;
  } else {
    months = 12 + m2 - m1;
    years--;
  }
  if (d2 >= d1) {
    days = d2 - d1;
  } else {
    days = 31 + d2 - d1;
  }
  console.log(years);
  console.log(months);
  birthText.innerHTML = `Yours age is ${years} and months ${months} and ${days} days`;
  let noIsNaN = "" + years;
  if (noIsNaN == "NaN") {
    message.innerHTML = `ENTER CORRECT DATE OF BIRTH..`;
    message.style.color = "red";
  } else {
    message.innerHTML = `Thank YOU......`;
    message.style.color = "green";
  }
});

// console.log(birthDay);
