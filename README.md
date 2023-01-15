# 💡 bot-light

A Telegram chat bot. 
Because of massive russian attacks on Ukrainian critical infrastructure, civilians faced power supply problems. You can ask this bot if a particular (my) house has electricity.

## ❓ How does it work
Chat bot sends request using IP adress, if the response is OK, then there is an electricity. Otherwise there is not.

> Note!!! If there is no Internet connection with the provider, the bot will show the absence of electricity.

## 🧰 Dependencies and technologies

- node.js
- node-fetch
- telegraf
- Railway for hosting
