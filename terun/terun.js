module.exports = {
    commands: {
        apresentacao: {
            args: ["descricao_todo_mock", "entidade_nome"],
            transports: [{
                from: './api.terun',
                to: './{{entidade_nome | lowercase}}/api.js'
            }]
        }
    }
};