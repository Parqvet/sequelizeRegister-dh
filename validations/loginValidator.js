const { check, body } = require('express-validator');

module.exports = [
    check('email')
        .isEmail()
        .withMessage('Debes escribir un email válido'),

    check('pass')
    .notEmpty()
    .withMessage('Debes ingresar una contraseña válida')
]