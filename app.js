import express from 'express';
import { PORT, TOKEN } from './config.js'
import { Telegraf } from 'telegraf';
import pkg from 'express';
import got from 'got';
import https from 'https';
import { getMainMenu } from './keyboard.js'

import fetch from "node-fetch";

const app = express();
const bot = new Telegraf(TOKEN)


bot.start( ctx => {
    ctx.reply('Вітаю! Тут Ви можете перевірити наявність світла. Натисніть на кнопку "Світло є?"', getMainMenu())
    
})

bot.hears('Світло є?', async ctx => {

    fetch('https://vadymklymenko.com/ping/?ip=109.251.102.171')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data.status.toString())
        ctx.reply(`${data.status == 'ok' ? "Світло є 💡" : "Світла немає 🥲"}`)

        // return data.status 
    
    });
})

bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))