const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");
let html = " ";
fetch(
  "http://api.exchangeratesapi.io/v1/latest?access_key=650e7bf170be3fd0ed9f4d6d1c43b99c"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const arrkeys = Object.keys(data.rates);
    const rates = data.rates;
    arrkeys.map((item) => {
      return (html += `<option value="${item}">${item}</option>`);
    });
    for (let i = 0; i < select.length; i++) {
      select[i].innerHTML = html;
    }
    function convert(i, j) {
      input[i].value =
        (input[j].value * rates[select[i].value]) / rates[select[j].value];
    }
    input[0].addEventListener("keyup", () => convert(1, 0));
    input[1].addEventListener("keyup", () => convert(0, 1));
    select[0].addEventListener("change", () => convert(1, 0));
    select[1].addEventListener("change", () => convert(0, 1));
  });
