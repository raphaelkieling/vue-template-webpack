const EntityPlugin = require("@terun/plugin-entity")

module.exports = {
    commands: {
        apresentacao: {
            plugins: [
                new EntityPlugin()
            ],
            args: [{
                type: "text",
                name: "entity_name_show",
                message: "Como descreveria a entidade?"
            }, ],
            transports: [{
                    from: './api.terun',
                    to: './{{entity | underscore |lowercase}}/api.ts'
                },
                {
                    from: './Index.terun',
                    to: './{{entity | underscore |lowercase}}/Index.vue'
                },
                {
                    from: './index.terun',
                    to: './{{entity | underscore |lowercase}}/index.ts'
                },
                {
                    from: './router.terun',
                    to: './{{entity | underscore |lowercase}}/router.ts'
                },
                {
                    from: './List.terun',
                    to: './{{entity | underscore |lowercase}}/List.vue'
                }
            ]
        }
    }
};