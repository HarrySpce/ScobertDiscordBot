const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Scoobert'),
	async execute(interaction) {
		await interaction.reply('<:scoob:1149704380556259359>');
	},
};