const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Affiche des informations sur l\'utilisateur qui a exécuté la commande.'),
    async execute(interaction) {
        await interaction.reply(`Nom de l'utilisateur : ${interaction.user.username}\nDate d'arrivée sur le serveur : ${interaction.member.joinedAt}`);
    },
};
