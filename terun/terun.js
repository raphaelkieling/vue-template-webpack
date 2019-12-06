module.exports = {
    commands: {
        example: {
            args: [
                "entity_name_show",
                "entity"
            ],
            transports: [
                {
                    from: './templates/Index.terun',
                    to: '../src/modules/{{entitiy | underscore | lowercase}}/Index.vue'
                },
                {
                    from: './templates/index.terun',
                    to: '../src/modules/{{entitiy | underscore | lowercase}}/index.ts'
                },
                {
                    from: './templates/List.terun',
                    to: '../src/modules/{{entitiy | underscore | lowercase}}/List.vue'
                },
                {
                    from: './templates/router.terun',
                    to: '../src/modules/{{entitiy | underscore | lowercase}}/router.ts'
                }
            ]
        }
    }
};