export default function initFetchBitcoin() {
  console.log("TESTE");
  fetch("https://blockchain.info/ticker").then((response) => {
    response
      .json()
      .then((bitcoin) => {
        const btcPreco = document.querySelector(".btc-preco");
        btcPreco.innerHTML = (100 / bitcoin.BRL.sell).toFixed(4);
      })
      .catch((erro) => {
        console.log(Error(erro));
      });
  });
}

// https://blockchain.info/ticker
