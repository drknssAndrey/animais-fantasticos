<<<<<<< HEAD
export default function fetchBitcoin(url, target) {
  fetch(url).then((response) => {
=======
export default function initFetchBitcoin() {
  console.log("TESTE");
  fetch("https://blockchain.info/ticker").then((response) => {
>>>>>>> master
    response
      .json()
      .then((bitcoin) => {
        const btcPreco = document.querySelector(target);
        btcPreco.innerHTML = (100 / bitcoin.BRL.sell).toFixed(4);
      })
      .catch((erro) => {
        console.log(Error(erro));
      });
  });
}

// https://blockchain.info/ticker
