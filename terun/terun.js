module.exports = {
    commands: {
        apresentacao: {
            args: [{
                    type: "text",
                    message: "Qual o nome da entidade?",
                    name: "entidade"
                },
                {
                    type: "text",
                    message: "Qual a descrição da entidade?",
                    name: "entidade_descricao"
                },
                {
                    type: "multiselect",
                    name: "qual_criar",
                    message: "Quais arquivos deseja criar",
                    choices: [
                        { title: "API", value: "api" }
                    ]
                }
            ],
            transports: [{
                    validator: ({ args }) => {
                        return args.qual_criar.includes("api");
                    },
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