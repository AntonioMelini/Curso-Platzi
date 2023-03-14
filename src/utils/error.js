function err(message, code){
    console.log('entro a utils/errors');
    let error =  new Error(message);

    if(code) error.statusCode = code;

    return error;
}

module.exports = err;