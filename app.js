import express from 'express';
import { PORT, TOKEN } from './config.js'
import { Telegraf } from 'telegraf';
import pkg from 'express';
import got from 'got';
import https from 'https';


const app = express();
const bot = new Telegraf(TOKEN)

async function isAvailable() {
    var request =   got.get(`https://vadymklymenko.com/ping/?ip=109.251.102.171`)
    request.headers = {"Accept": "application/json"}
  
    let response = await JSON.parse(JSON.stringify(request))
  
    // Scriptable will throw an error to widget in case of internet issues
    return [response["status"] == "ok", response["error"]]
  }

// async function isAvailable() {
//     const options = {
//         hostname: 'https://vadymklymenko.com/ping/?ip=109.251.102.171',
//         // port: 443,
//         // path: '/',
//         method: 'GET',
//         headers: {
//            'Content-Type': 'application/json',
//            'User-Agent': 'Foo'
//         }
//       };

   

//   }


bot.start(async ctx => {
    const [isWifiAvailable, errorText] = await isAvailable(); 
    ctx.reply(isWifiAvailable? 'ye' : 'nema')
    // const test = await isAvailable(); 
    // ctx.reply(test)
})
// bot.on('text', ctx => {
//     ctx.reply('just text')
// })
bot.launch()
app.listen(PORT, () => console.log(`My server is running on port ${PORT}`))