
const database = require('./../config/database_config');

exports.rotaTarefas = (req, res) => {

    database.query('select * from tarefas').then(
        (result) => {
            res.status(200).send({
                tarefa: result.rows
            })
        },
        (erro) => {
            res.status(404).send({ erro: erro })
        }
    )
}

exports.rotaTarefasId = (req, res) => {
    const id = req.params.id;

    const query = 'SELECT * FROM tarefas WHERE id_tarefas=$1';
    const values = [id];

    database.query(query, values).then(
        (resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).send({ tarefa: resultado.rows });
            } else {
                res.status(404).send({ mensagem: "Nenhum item encontrado com o id fornecido." });
            }
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    );
};

exports.rotaAdicionarTarefa = (req, res) => {

    const query = 'INSERT INTO tarefas(descricao_terefas, status_tarefas) VALUES ($1, $2);';
    const values = [req.body.descricao_terefas, req.body.status_tarefas];

    database.query(query, values).then(
        () => {
            res.status(201).send({
                message: 'Tarefa cadastrada com Sucesso!'
            })
        },
        (erro) => {
            res.status(500).send({ erro: erro })
        }
    )
}

exports.rotaDeletarTarefa = (req, res) => {
    const id = req.params.id;

    const query = 'DELETE FROM tarefas WHERE id_tarefas=$1';
    const values = [id];

    database.query(query, values).then(
        () => {
            res.status(201).send({
                message: 'Tarefa Excluída com Sucesso!'
            });
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    );

};

exports.rotaTarefaAndamento = (req, res) => {
    const id = req.params.id; 

    const query = 'UPDATE tarefas SET status_tarefas=$2 WHERE id_tarefas=$1';
    const values = [id, 'Andamento'];

    database.query(query, values).then(
        () => {
            res.status(201).send({
                message: 'Tarefa Atualizada para o status de "Andamento" com Sucesso!'
            });
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    );
};

exports.rotaTarefaConcluida = (req, res) => {
    const id = req.params.id; 

    const query = 'UPDATE tarefas SET status_tarefas=$2 WHERE id_tarefas=$1';
    const values = [id, 'Concluida'];

    database.query(query, values).then(
        () => {
            res.status(201).send({
                message: 'Tarefa Atualizada para o status de "Concluída" com Sucesso!'
            });
        },
        (erro) => {
            res.status(500).send({ erro: erro });
        }
    );
};