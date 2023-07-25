import CharacterAI from 'node_characterai';
import discord from 'discord.js-selfbot-v13';
import config from './config.json' assert { 'type': 'json' };

let timeout = new Set()

const c_ai = new CharacterAI()
await c_ai.authenticateWithToken(config.c_ai_token)

function checkCountdown(message) {
    if (timeout.has(message.author.id)) {
        return true;
    } else {
        timeout.add(message.author.id);
        setTimeout(() => {
            timeout.delete(message.author.id);
        }, 10000);
        return false
    }
}

const client = new discord.Client({
    checkUpdate: false
})

client.once('ready', async () => {
    console.log(`${client.user.username} is Ready!`)
})

client.on('messageCreate', async (message) => {
    if (message.author.bot || message.author.id == client.user.id) return;
    if (message.guild == null) return;
    if (!message.mentions.has(client.user)) return;

    try {
        let msg = `${message.content} | OOC: This message has been sent by ${message.author.username}, in the server ${message.guild.name}.`
        console.log(msg)
        if (checkCountdown(message)) return;
        message.channel.sendTyping();
        let response = await client.chat.sendAndAwaitResponse(msg, true);
        message.reply({content: response.text.replace(/\n+/g, " ")})
    } catch (error) {
        console.log(error)
    }
})

client.login(config.bot_token)