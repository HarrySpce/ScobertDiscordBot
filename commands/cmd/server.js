const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Gives server name and member count.'),
	async execute(interaction) {
		await interaction.reply(`This is ${interaction.guild.name} and has ${interaction.guild.memberCount} members. <:scoob:1149704380556259359>`);
	},
};