const EntityPlugin = require("@terun/plugin-entity")

module.exports = {
    commands: {
        apresentacao: {
            plugins: [
                new EntityPlugin()
            ],
            args: [
                "entity_name_show",
            ],
            transports: [{
                    validator: ({ args }) => {
                        return args.qual_criar.includes("api");
                    },
                    from: './api.terun',
                    to: './{{entidade | underscore |lowercase}}/api.ts'
                },
                {
                    from: './Index.terun',
                    to: './{{entidade | underscore |lowercase}}/Index.vue'
                },
                {
                    from: './index.terun',
                    to: './{{entidade | underscore |lowercase}}/index.ts'
                },
                {
                    from: './router.terun',
                    to: './{{entidade | underscore |lowercase}}/router.ts'
                },
                {
                    from: './List.terun',
                    to: './{{entidade | underscore |lowercase}}/List.vue'
                }
            ]
        }
    }
};