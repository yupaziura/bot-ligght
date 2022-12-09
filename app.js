import express from 'express';
import { PORT, TOKEN } from './config.js'
import { Telegraf } from 'telegraf';
import pkg from 'express';
import got from 'got';
import https from 'https';
import fetch from "node-fetch";


const app = express();
const bot = new Telegraf(TOKEN)



bot.start(async ctx => {

    fetch('https://vadymklymenko.com/ping/?ip=109.251.102.171')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.status.toString())
        ctx.reply(`${data.status == 'ok' ? "ye" : "nema"}`)

        // return data.status 
    
    });
})

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))