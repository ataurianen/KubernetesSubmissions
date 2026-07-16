const crypto = require('crypto');

const randomString = crypto.randomUUID();

function outputString() {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}: ${randomString}`);
}

outputString();
setInterval(outputString, 5000);