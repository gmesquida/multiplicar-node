const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido de la base no es un numero');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {

            data += (` ${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-${limite}.txt`)
        });
    })
}

// module.exports.crearArchivo
let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log('El valor introducido de la base no es un numero');
        return;
    }

    console.log(`===========================`);
    console.log(`===== Tabla de base ${base}======`.green);
    console.log(`===========================`);

    for (let i = 1; i <= limite; i++) {

        console.log(` ${base} * ${i} = ${base * i}`);
    }
}


module.exports = {
    crearArchivo,
    listarTabla
}