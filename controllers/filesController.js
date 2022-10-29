const { response, request } = require('express');
const { isValidExtension } = require('../helpers/globalHelpers');

const uploadFile = (req = request, res = response) => {


    if (!isValidExtension(req.files)) {
        return res.status(400).json({
            msg: 'Extension de archivo no valida'
        });
    }

    try {
        res.json({
            msg: 'File uploaded',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Error de servidor. No se pudo subir el archivo',
        });
    }

}



module.exports = {
    uploadFile
}