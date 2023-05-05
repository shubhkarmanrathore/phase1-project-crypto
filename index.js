const Url = 'https://api.coincap.io/v2/assets';
const coinsGrid = document.querySelector('.coins-grid');
const searchInput = document.getElementById('search-input');

// Fetch data from CoinCap API
async function getCoins() {
  try {
    const response = await fetch(Url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error(error);
  }
}