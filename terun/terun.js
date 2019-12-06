const EntityPlugin = require("@terun/plugin-entity")

module.exports = {
    commands: {
        example: {
            plugins:[
                new EntityPlugin()
            ],
            args: [
                "entity_name_show",
            ],
            transports: [
                {
                    from: './templates/Index.terun',
                    to: '../src/modules/{{entity | underscore | lowercase}}/Index.vue'
                },
                {
                    from: './templates/index.terun',
                    to: '../src/modules/{{entity | underscore | lowercase}}/index.ts'
                },
                {
                    from: './templates/List.terun',
                    to: '../src/modules/{{entity | underscore | lowercase}}/List.vue'
                },
                {
                    from: './templates/router.terun',
                    to: '../src/modules/{{entity | underscore | lowercase}}/router.ts'
                }
            ]
        }
    }
};