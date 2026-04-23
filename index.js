const mineflayer = require('mineflayer')
const bot = mineflayer.createBot({
  host: 'your-server-ip.aternos.me', // Replace with your IP
  port: 25565,
  username: 'GuardBot_247',
  version: '1.20.1' // Match your version
})
bot.on('chat', (username, message) => {
  if (username === bot.username) return
  bot.chat("I'm here to keep the economy moving!")
})
