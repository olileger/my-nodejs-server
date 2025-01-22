# My Node.js Server

This project is a simple Node.js server using Express that serves a web page and provides an API endpoint to return a random number. It also integrates Microsoft Azure Application Insights for logging incoming requests.

## Project Structure

```
my-nodejs-server
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes               # Contains route definitions
│   │   ├── index.js         # Route for the root path ("/")
│   │   └── api.js           # Route for the "/api" path
│   ├── views                # Contains view templates
│   │   └── index.ejs        # Template for the root path
│   └── middleware           # Contains middleware functions
│       └── appInsights.js    # Middleware for Azure App Insights
├── package.json             # npm configuration file
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-nodejs-server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your Azure App Insights instrumentation key:
   ```
   APPINSIGHTS_INSTRUMENTATIONKEY=your_instrumentation_key
   ```

4. **Run the server:**
   ```
   node src/app.js
   ```

5. **Access the application:**
   - Open your browser and go to `http://localhost:3000` to see the web page.
   - Access the API at `http://localhost:3000/api` to get a random number.

## Usage

This server is designed to demonstrate a basic Express application structure with routing and middleware. You can expand upon this foundation by adding more routes, views, and middleware as needed.