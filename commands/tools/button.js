const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("button")
    .setDescription("ret a butto"),
    async execute(interaction, client) {
      const button = new ButtonBuilder()
      .setCustomId('sub-yt')
      .setLabel(`spin`)
      .setStyle(ButtonStyle.Primary);

      await interaction.reply({
        components: [new ActionRowBuilder().addComponents(button)]
      });
    },
};