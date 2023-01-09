const { readdirSync } = require("fs");

module.exports = (client) => {
    client.handleComponents = async () => {
        const componentFolder = readdirSync(`./components`);
        for(const folder of componentFolders) {
            const componentFiles = readdirSync(`./components/${folder}`).filter(
                (file) => file.endsWith(".js")

            );

        }
    }
}