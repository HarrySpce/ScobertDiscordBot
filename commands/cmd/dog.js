const { SlashCommandBuilder } = require('discord.js');

const imageUrls = [
    'https://cdn.discordapp.com/attachments/1117243546072780820/1152003935121444924/mainscoob.png',
    'https://cdn.discordapp.com/attachments/1117243546072780820/1152003976770883635/IMG_9441.jpg',
    //add more urls here
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dog')
        .setDescription('Get a random picture of Scoobert'),
    async execute(interaction) {
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

        await interaction.reply({
            content: '',
            embeds: [
                {
                    image: {
                        url: randomImageUrl,
                    },
                },
            ],
        });
    },
};
