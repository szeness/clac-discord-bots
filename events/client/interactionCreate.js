
module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {
        if(interaction.isButton()) {
            const{ buttons } = client;
            const { customId } = interaction;
            const button = buttons.get(customId);
            if(!button) return new Error('no code for butto')

            try{
                await button.execute(interaction, client);
            } catch (error) {
                console.lgt(error);
            }
        }




    }
}