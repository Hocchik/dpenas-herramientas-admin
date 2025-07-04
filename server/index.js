import app from './app.js';
import {getConnection} from './src/database/connection.js';

getConnection();

app.listen(process.env.PORT || 3000);
console.log('Server on port', process.env.PORT || 3000);