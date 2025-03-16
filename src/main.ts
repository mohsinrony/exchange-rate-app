import { FetchWrapper } from './fetchWrapper';
const apiKey = import.meta.env.VITE_API_KEY;
// Initialize the FetchWrapper with your API base URL
const fetchWrapper = new FetchWrapper(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/`);

const baseCurrencySelect = document.getElementById('base-currency') as HTMLSelectElement;
const targetCurrencySelect = document.getElementById('target-currency') as HTMLSelectElement;
const conversionResultElement = document.getElementById('conversion-result') as HTMLParagraphElement;

// Function to fetch the conversion rates
async function getConversionRates() {
  const baseCurrency = baseCurrencySelect.value;
  const targetCurrency = targetCurrencySelect.value;

  try {
    const data = await fetchWrapper.get(`${baseCurrency}`);
    const conversionRate = data.conversion_rates[targetCurrency];

    if (conversionRate) {
      conversionResultElement.textContent = conversionRate.toString(); // Update the UI
    } else {
      conversionResultElement.textContent = 'Rate not available'; // Handle missing rate
    }
  } catch (error) {
    console.error('Error fetching conversion rates:', error);
    conversionResultElement.textContent = 'Error fetching rates';
  }
}

// Event listeners for currency selection
baseCurrencySelect.addEventListener('change', getConversionRates);
targetCurrencySelect.addEventListener('change', getConversionRates);

// Initial fetch to display the conversion rate when the page loads
getConversionRates();
