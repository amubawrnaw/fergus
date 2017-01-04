module.exports.run = (message, args) => {
  const embed = require('../util/embed.js').run()
    .setTitle('Useful Links')
    .setDescription(
      'Hero/SBW/Skill IRC Tier List\n' +
      'https://goo.gl/oNQ2iF\n' +
      'by jaetheho, Viress, sakai4eva, kamakiller\n\n' +
      'Vyrlokar\'s Ultimate Guide to the CQ Champions\n' +
      'https://goo.gl/M37qRm\n' +
      'by Vyrlokar');
  message.channel.sendEmbed(embed);
};