const Discord = require('discord.js');

exports.help = {
  name: 'ping',
  aliases: ['latence'],
  description: 'Montre la latence du bot.',
  use: 'ping',
}
exports.run = async (bot, message, args, config) => {
    const embed = new Discord.EmbedBuilder()
    .setTitle('Pong ! 🏓')
    .setDescription(`> Mon ping : \`${bot.ws.ping}\`ms.`)
    .setFooter({ text: message.author.username, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
    .setColor(config.color)
    .setTimestamp();
    return message.reply({ embeds: [embed], allowedMentions: { repliedUser: false } });
}