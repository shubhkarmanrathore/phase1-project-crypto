document.addEventListener('DOMContentLoaded', () => {
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


// Display coin data in the grid
function displayCoins(coins) {
    coinsGrid.textContent = '';
    coins.slice(0, 20).forEach(coin => {
        const { id, rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr,  priceUsd, changePercent24Hr, vwap24Hr } = coin;
  
    const card = document.createElement('div');
    card.classList.add('coin-card');
  
    const image = document.createElement('img');
    image.src = `https://crypto.com/price/_next/image?url=https%3A%2F%2Fstatic.crypto.com%2Ftoken%2Ficons%2F${id}%2Fcolor_icon.png&w=64&q=75`;
    image.alt = `${name} icon`;
  
    const heading = document.createElement('h2');
    heading.textContent = `${name} (${symbol})`;
  
    const price = document.createElement('p');
    price.textContent = `Price: $${parseFloat(priceUsd).toFixed(2)}`;
  
    const change = document.createElement('p');
    change.textContent = `24h Change: ${parseFloat(changePercent24Hr).toFixed(2)}%`;
    const arrow = document.createElement('span');
    arrow.classList.add('arrow');

    if (changePercent24Hr >= 0) {
      arrow.textContent = '   ⇧';
      arrow.classList.add('green-arrow');
    } else {
      arrow.textContent = '   ⇩';
      arrow.classList.add('red-arrow');
    }

    change.appendChild(arrow);

    card.appendChild(image);
    card.appendChild(heading);
    card.appendChild(price);
    card.appendChild(change);
    coinsGrid.appendChild(card);
    });
  }


// Search for coins
function searchCoins(event) {
    const searchValue = event.target.value.toLowerCase();
    getCoins().then(coins => {
      const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(searchValue) ||
               coin.symbol.toLowerCase().includes(searchValue);
      });
      displayCoins(filteredCoins);
    });
  }
  

// Load and display the top 20 coins on page load
getCoins().then(coins => {
    displayCoins(coins);
});
  

// Add event listener to search input
searchInput.addEventListener('input', searchCoins);
  

//Refresh page from home button
const h1 = document.querySelector('h1')
h1.addEventListener('click', reloadPage)
function reloadPage() {
    location.reload()
}


//Dark Mode toggle
const toggle = document.querySelector('.toggle');
const toggleLabel = document.querySelector('.toggle-label');
const body = document.querySelector('body');

toggle.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    toggleLabel.classList.add('toggle-label--checked');
  } else {
    body.classList.remove('dark-mode');
    toggleLabel.classList.remove('toggle-label--checked');
  }  
});


//Page Scroll
function scrollToBottom() {
    const contactButton = document.querySelector('#contactButton');
    contactButton.addEventListener('click', () => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  }
  
  scrollToBottom();


// // Show detailed information about a coin when its card is clicked
// function showCoinDetails(coinDetails) {
//     const { id, rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr,  priceUsd, changePercent24Hr, vwap24Hr } = coinDetails;
  
//     const modalOverlay = document.createElement('div');
//     modalOverlay.classList.add('modal-overlay');
  
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
  
//     const closeModalButton = document.createElement('button');
//     closeModalButton.classList.add('modal-close');
//     closeModalButton.textContent = 'X';
  
//     const coinName = document.createElement('h2');
//     coinName.classList.add('modal-title');
//     coinName.textContent = `${name} (${symbol})`;
  
//     const coinImage = document.createElement('img');
//     coinImage.classList.add('modal-image');
//     coinImage.src = `https://crypto.com/price/_next/image?url=https%3A%2F%2Fstatic.crypto.com%2Ftoken%2Ficons%2F${id}%2Fcolor_icon.png&w=128&q=75`;
//     coinImage.alt = `${name} icon`;
  
//     const coinInfoList = document.createElement('ul');
//     coinInfoList.classList.add('modal-list');
  
//     const idItem = document.createElement('li');
//     idItem.innerHTML = `<span>ID:</span> ${id}`;
//     coinInfoList.appendChild(idItem);
  
//     const rankItem = document.createElement('li');
//     rankItem.innerHTML = `<span>Rank:</span> ${rank}`;
//     coinInfoList.appendChild(rankItem);
  
//     const supplyItem = document.createElement('li');
//     supplyItem.innerHTML = `<span>Supply:</span> ${supply}`;
//     coinInfoList.appendChild(supplyItem);
  
//     const maxSupplyItem = document.createElement('li');
//     maxSupplyItem.innerHTML = `<span>Max Supply:</span> ${maxSupply}`;
//     coinInfoList.appendChild(maxSupplyItem);
  
//     const marketCapItem = document.createElement('li');
//     marketCapItem.innerHTML = `<span>Market Cap:</span> $${parseFloat(marketCapUsd).toFixed(2)}`;
//     coinInfoList.appendChild(marketCapItem);
  
//     const volumeItem = document.createElement('li');
//     volumeItem.innerHTML = `<span>Volume (24h):</span> $${parseFloat(volumeUsd24Hr).toFixed(2)}`;
//     coinInfoList.appendChild(volumeItem);
  
//     const priceItem = document.createElement('li');
//     priceItem.innerHTML = `<span>Price:</span> $${parseFloat(priceUsd).toFixed(2)}`;
//     coinInfoList.appendChild(priceItem);
  
//     const changeItem = document.createElement('li');
//     const arrow = document.createElement('span');
//     arrow.classList.add('arrow');
  
//     if (changePercent24Hr >= 0) {
//       arrow.textContent = '   ⇧';
//       arrow.classList.add('green-arrow');
//     } else {
//       arrow.textContent = '   ⇩';
//       arrow.classList.add('red-arrow');
//     }
  
//     changeItem.innerHTML = `<span>24h Change:</span> ${parseFloat(changePercent24Hr).toFixed(2)}%`;
//     changeItem.appendChild(arrow);
//     coinInfoList.appendChild(changeItem);
  
//     const vwapItem = document.createElement('li');
//     vwapItem.innerHTML = `<span>VWAP (24h):</span> $${parseFloat(vwap24Hr).toFixed(2)}`;
//     coinInfoList.appendChild(vwapItem);
  
//     modal.appendChild(closeModalButton);
//     modal.appendChild(coinName);
//     modal.appendChild

// const card = document.querySelector('.coin-card')
// card.addEventListener('click', showCoinDetails)
// }
// getCoins().then(coinDetails => {
//     showCoinDetails(coinDetails);
// });

}) 

