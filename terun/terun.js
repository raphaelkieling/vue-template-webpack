module.exports = {
    commands: {
        apresentacao: {
            args: ["entidade", "entidade_descricao"],
            transports: [{
                    from: './api.terun',
                    to: './{{entidade | lowercase}}/api.ts'
                },
                {
                    from: './Index.terun',
                    to: './{{entidade | lowercase}}/Index.vue'
                },
                {
                    from: './index.terun',
                    to: './{{entidade | lowercase}}/index.ts'
                },
                {
                    from: './router.terun',
                    to: './{{entidade | lowercase}}/router.ts'
                },
                {
                    from: './List.terun',
                    to: './{{entidade | lowercase}}/List.vue'
                }
            ]
        }
    }
};