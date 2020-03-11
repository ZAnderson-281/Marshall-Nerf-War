/**
 *      Developer:  Zachary Anderson
 *      Date:       3/10/2020
 * 
 *      About:      This file is the main server file for the marshall nerf war. It acts as an API interfacing with data between mongo
 *                  and the user interfaces. Each of the files associated with this index server file are located within the server folder.
 *                  
 */

const express = require('express');
const app = express();

// ===== MIDDLEWARE =====
const requestLogger = require('./server/middleware/logger.js')
app.use(requestLogger);

// ===== CORS =====
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
      return res.status(200).json({});
    }
    next();
  });
// ===== BODY PARSERS =====
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ===== API ROUTES =====
app.use('/api/users', require('./server/routes/userApiRoutes')); // Player API


// ===== SERVER CREATION =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));