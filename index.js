const mineflayer = require('mineflayer')

const botArgs = {
    host: 'Chaos_SMP-tHvy.aternos.me:27024', 
    port: 25565,
    username: 'GuardianBot',
    version: '1.21.11' 
};

const initBot = () => {
    let bot = mineflayer.createBot(botArgs);

    bot.on('spawn', () => {
        console.log('Bot spawned! Moving to prevent AFK kick...');
    
        setInterval(() => {
            const yaw = Math.random() * Math.PI * 2;
            const pitch = (Math.random() - 0.5) * Math.PI;
            bot.look(yaw, pitch, false);
            
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
            
            bot.chat("Keeping the economy online! /ah is open!");
        }, 20000); 
    });

    bot.on('end', () => {
        console.log('Disconnected. Reconnecting in 15 seconds...');
        setTimeout(initBot, 15000);
    });

    bot.on('error', (err) => console.log('Error:', err));
};

initBot();
