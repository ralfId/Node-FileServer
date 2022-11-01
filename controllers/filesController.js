const fs = require('fs');
const { response, request } = require('express');
const csv = require('csv-parser');
const { isValidExtension, createChunks, saveFileInServer } = require('../helpers/globalHelpers');
const Employee = require('../models/Employee');


const uploadFile = async (req = request, res = response) => {

    console.log(req.files);
    if (!isValidExtension(req.files)) {
        return res.status(400).json({
            msg: 'Extension de archivo no valida'
        });
    }



    try {

        let resultData = [];

        fs.createReadStream(req.files.data_empleados.tempFilePath)
            .pipe(csv(['First_Name', 'Last_Name', 'Email', 'Country', 'City', 'Address', 'Profession', 'Company']))
            .on('data', (data) => {
                resultData.push(data);
            })
            .on('end', () => {


                resultData = resultData.filter((element) => element.Email !== 'Email');

                Employee.bulkCreate(resultData).then(async () => {
                    const fileName = await saveFileInServer(req.files.data_empleados);
      
                    res.json({
                        msg: 'Archivo subido correctamente',
                        data: {
                            'Nombre_Archivo': fileName
                        }
                    });
                }).catch((err) => {
                    console.log(err);
                    res.status(400).json({
                        msg: 'El archivo no se pudo subir',
                        data: {
                            1: 'Recuerde que todos los campos son obligatorios',
                            2: 'Recuerde que el email debe ser unico por cada empleado'
                        }
                    });
                })

                // const chunks = createChunks(resultData, 3000);
                // chunks.forEach((element, index) => {
                //     Employee.bulkCreate(element).then((CV) => { }).catch((err) => { console.log() });
                // });

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