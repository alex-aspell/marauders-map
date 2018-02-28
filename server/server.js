const express = require('express');
const app = express();

app.use(express.static('server/public'));



const port = process.env.PORT || 12345;
app.listen(port, function(){
    console.log('listening on port', port);  
});