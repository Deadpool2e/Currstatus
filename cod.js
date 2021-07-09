fetch(
  "https://api.lunarcrush.com/v2?data=coinoftheday&key=44mtvacdiqehrphusunv87"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("coin").innerHTML = ` ${data.data.name} `;
    document.getElementById("symbol").innerHTML = ` ${data.data.symbol} `;
  });
