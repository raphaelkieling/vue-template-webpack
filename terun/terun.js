const EntityPlugin = require("@terun/plugin-entity")
const TempoPlugin = require("./plugins/tempo-plugin");

module.exports = {
    commands: {
        apresentacao: {
            plugins: [
                new EntityPlugin(),
                new TempoPlugin()
            ],
            args: [{
                type: "text",
                name: "entity_name_show",
                message: "Como descreveria a entidade?"
            }, ],
            transports: [{
                    from: './templates/api.terun',
                    to: '../src/modules/{{entity | underscore |lowercase}}/api.ts'
                },
                {
                    from: './templates/Index.terun',
                    to: '../src/modules/{{entity | underscore |lowercase}}/Index.vue'
                },
                {
                    from: './templates/index.terun',
                    to: '../src/modules/{{entity | underscore |lowercase}}/index.ts'
                },
                {
                    from: './templates/router.terun',
                    to: '../src/modules/{{entity | underscore |lowercase}}/router.ts'
                },
                {
                    from: './templates/List.terun',
                    to: '../src/modules/{{entity | underscore |lowercase}}/List.vue'
                }
            ]
        }
    }
};