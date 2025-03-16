# Currency Exchange Rate App

A simple and interactive web app that allows users to convert between different currencies using real-time exchange rates. The app provides the ability to select a base currency and a target currency, and it will display the conversion rate between the two.

## Features

- **Currency Conversion**: Select a base currency and target currency to view the exchange rate.
- **Real-Time Data**: Fetches real-time exchange rate data from an external API.
- **User-Friendly UI**: Clean, responsive design with dropdown menus for easy currency selection.

## Technologies Used

- **HTML**: For the structure of the web page.
- **CSS**: For styling and layout.
- **TypeScript**: For type safety and better development experience.
- **Vite**: For fast development and build tooling.
- **Exchange Rate API**: Provides real-time currency exchange rates.

## Installation

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/mohsinrony/exchange-rate-app.git
   ```

2. Navigate to the project folder:

   ```bash
   cd exchange-rate-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key:

   ```bash
   VITE_API_KEY=your-api-key-here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and go to `http://localhost:5174` to view the app.

## How It Works

- Users can select a base currency and a target currency from the dropdown menus.
- The app fetches the conversion rates for the selected currencies from the API and displays the result.
- You can choose currencies such as USD, EUR, INR, etc.

## API

This app uses the [ExchangeRate-API](https://www.exchangerate-api.com/) for fetching currency conversion rates. Make sure to sign up and get your free API key to use this service.

## Contributing

Feel free to fork this project, submit pull requests, or open issues for any bug fixes or improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

# Instructions:

- Replace the your-api-key-here placeholder with your actual API key.
- You can adjust the list of technologies and features based on the specific tech stack you're using.
