const validFileExtension = ['csv'];

const isValidExtension = (files ) => {
    const { file } = files;
    const fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1);

    if (!validFileExtension.includes(fileExtension)) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = { 
    isValidExtension,
 };