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
  

//Refresh page from logo and home button
const h1 = document.querySelector('h1')
const homeButton= document.querySelector('#homeButton')
h1.addEventListener('click', reloadPage)
homeButton.addEventListener('click', reloadPage)
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

// Get the button element
const aboutButton = document.querySelector("#aboutButton");
const termsButton = document.querySelector("#termsOfService");
const disclaimerButton = document.querySelector("#disclaimer");
const privacyButton = document.querySelector("#privacyPolicy");

// Add a click event listener to the About button
aboutButton.addEventListener("click", () => {
  alert("Feature not available");
});
termsButton.addEventListener("click", () => {
  alert("Feature not available");
});
disclaimerButton.addEventListener("click", () => {
  alert("Feature not available");
});
privacyButton.addEventListener("click", () => {
  alert("Feature not available");
});



}) 

