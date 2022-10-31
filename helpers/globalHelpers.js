const path = require('path');

const validFileExtension = ['csv'];

const isValidExtension = (files) => {
    const { file } = files;
    const fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1);

    if (!validFileExtension.includes(fileExtension)) {
        return false;
    }
    else {
        return true;
    }
}

const createChunks = (data, size) => {

    const chunks  = [];
    data = [].concat(...data);

    while (data.length) {
        chunks.push(data.splice(0, size));
    }

    return chunks;
}

const saveFileInServer = (file)=>{
    return new Promise((resolve, reject)=>{

        const newFileName = `carga_empleados_${Date.now()}.csv`;

        const uploadPath = path.join(__dirname, '../uploadFiles/' , newFileName);

        file.mv(uploadPath, (err)=>{
            if(err){
                reject(err);
            }
            return resolve(newFileName);
        });

    });
}

module.exports = {
    isValidExtension,
    createChunks,
    saveFileInServer
};