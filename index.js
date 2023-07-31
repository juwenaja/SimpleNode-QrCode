"use strict";

/**
 * THIS SCRIPT ONLY USING CMD/TERMINAL
 * USE: > npm start "url/text"
 * 
 * WARNING: INPUT URL DON'T USE ['https://']
 * 
 * Thanks To : https://github.com/SumiMakito
 * GENERATE QR CODE SCRIPT USING : https://github.com/SumiMakito/Awesome-qr.js
 */

const lib = require("./lib/lib");

const index = async() => {
    let txt2 = process.argv[2] || lib.txt || false;
    await lib.startLog(txt2)
    await lib.process(txt2)
    await lib.succsessLog(txt2)
}

index()
.catch(console.error);
