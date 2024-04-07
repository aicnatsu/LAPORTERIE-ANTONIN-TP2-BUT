const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Renvoie le texte donné en argument.')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('Le texte à renvoyer.')
                .setRequired(true)),
    async execute(interaction) {
        const text = interaction.options.getString('text');
        await interaction.reply(text);
    },
};
