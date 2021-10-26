const express = require('express');
const bcrypt = require('bcrypt')

const User = require('../models/user');

const router = express.Router();

router.post('/cadastro', async (req, res) => {
    const { email } = req.body;
    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'Usuário já existe' });

        const usuario = await User.create(req.body);

        usuario.password = undefined;

        return res.send({ message: 'Cadastrado com Sucesso!', usuario });
    } catch (err) {
        return res.status(400).send({ error: "Cadastro Falhou!" });
    }
});

router.post('/login', async(req, res) => {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email }).select('+password');

    if (!usuario)
        return res.status(404).send({ error: 'Usuário não foi encontrado, digite o email novamente!' })
    
    if (!await bcrypt.compare(password, usuario.password))
        return res.status(400).send({ error: 'Senha Inválida!' });

    res.send({ message: 'Logado com sucesso!', usuario });
});

module.exports = app => app.use('/usuarios', router);