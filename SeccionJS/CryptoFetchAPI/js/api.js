const API_KEY = 'api_key={a9a85b35ec8a90cfd5ace68e8555bff701905e5f2b22312e817d63ea67e6aec6}';
const BASE_URL = 'https://min-api.cryptocompare.com/data';
const COIN_NO = 10;

document.addEventListener("DOMContentLoaded", loadAllCryptoCoins);

async function loadAllCryptoCoins() {
    // Retrieves all types of crypto coins an user can select
    let coins = await fetch(`${BASE_URL}/all/coinlist?${API_KEY}`);
    coins = await coins.json();
    coins = coins.Data;


    // Inserts all coins in the select tag
    let num = COIN_NO;
    for (var key in coins) {
        let selectCrypto = document.querySelector('#criptomoneda');
        selectCrypto.innerHTML = selectCrypto.innerHTML + `
            <option value="${coins[key].Symbol}">${coins[key].FullName}</option>
        `;
        num--;
        if (num == 0) {
            break;
        }
    }
}