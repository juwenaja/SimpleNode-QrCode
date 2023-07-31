"use strict";

const { AwesomeQR } = require("awesome-qr");
const { readFileSync, writeFileSync } = require("fs");

const log = () => {
    let clog = console.log
    return clog
}
    
const txt = () => {
    let txt = "https://github.com/juwenaja/SimpleNode-QrCode"
    return txt
}

const startLog = (txt) => {
        console.clear()
        console.log('')
        console.log(`Generating QR Code....`)
        console.log(`Text : ${txt}`)
        console.log('')
}

const succsessLog = (txt) => {
    console.log('')
    console.log(`Succsess Created QR Code!`)
    console.log(`Image saved with name: QrCode-${txt}.png`)
    console.log('')
}
const process = async(txt) => {
    const background = await readFileSync("./lib/background.png");
    const buffer = await new AwesomeQR({
        text: txt,
        size: 500,
        backgroundImage: background,
    }).draw();
    await writeFileSync(`./output/QrCode-${txt}.png`, buffer);
}

module.exports = {
    log,
    txt,
    process,
    startLog,
    succsessLog,
}