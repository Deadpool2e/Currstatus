const select = document.querySelectorAll("select");
let html = " ";
fetch(
  "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.data);
    const coinsData = data.data;
    if (coinsData.length > 0) {
      var cryptoCoin = "";
    }
    coinsData.forEach((coin) => {
      cryptoCoin += "<tr>";
      cryptoCoin += `<td> ${coin.symbol} </td>`;
      cryptoCoin += `<td> ${coin.slug} </td>`;
      cryptoCoin += `<td> ${coin.metrics.market_data.price_usd} </td>`;
    });
    //For Loop Ends
    document.getElementById("data").innerHTML = cryptoCoin;
  });
