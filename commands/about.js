exports.run = function(message, args) {
  const embed = require('../util/embed.js').run()
    .setTitle('Fergus')
    .setDescription('by Peter Han (Saarja)')
    .addField(
      'Special thanks to',
      'Poiya, fioritura, Fastrail, F1r3man, Protease, TheEggCake')
    .addField(
      'Want to help contribute, suggest a feature, or submit an issue?',
      'Visit: https://github.com/Johj/fergus');
  message.channel.sendEmbed(embed);
};
