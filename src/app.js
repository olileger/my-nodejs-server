require('dotenv').config();

// AppInsights config
const appInsights = require("applicationinsights");
appInsights.setup(process.env.APPINSIGHTS_KEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setSendLiveMetrics(true)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
    .start();
logger = appInsights.defaultClient;

// Express config
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

// Routes
app.get('/', (req, res) => {
    logger.trackTrace({ message: '/ called' });
    console.log('Index request received');
    res.render('index');
    console.log('Index response sent');
});
app.get('/api', (req, res) => {
    logger.trackTrace({ message: '/api called' });
    console.log('API request received');
    const randomNumber = Math.floor(Math.random() * 100);
    res.json({ number: randomNumber });
    console.log('API response sent');
});
app.get('/exception', (req, res) => {
    logger.trackTrace({ message: '/exception called' });
    console.log('Exception request received');
    try {
        throw new Error('Exception thrown');
    } catch (error) {
        logger.trackException({ exception: error });
    }
    res.send('Exception thrown');
    console.log('Exception response sent');
});





// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    logger.trackEvent({ name: 'Server started', properties: { port: PORT } });
});