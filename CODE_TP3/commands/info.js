const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Affiche des informations sur le serveur ou l\'utilisateur.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setDescription('Affiche des informations sur le serveur.'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('user')
                .setDescription('Affiche des informations sur l\'utilisateur.')),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();
        if (subcommand === 'server') {
            await interaction.reply(`Nom du serveur : ${interaction.guild.name}\nNombre de membres : ${interaction.guild.memberCount}`);
        } else if (subcommand === 'user') {
            await interaction.reply(`Nom de l'utilisateur : ${interaction.user.username}\nDate d'arrivée sur le serveur : ${interaction.member.joinedAt}`);
        }
    },
};
