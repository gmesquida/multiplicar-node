const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// Opción 1: sin parametros
// let base = 2;


// Opción 2: con process
// const { argv } = require('process');

// console.log(module);
// console.log(process.argv);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// Opción 3: Con libreria yargs
/* const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un fichero con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv; */

// Opción 4: Optimizamdo el yargs

const argv = require('./config/yargs').argv;
var colors = require('colors');


// console.log(argv);
// tratamiento de comando y de argumentos
let base = argv.base;
let limite = argv.limite;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado`, `${archivo}`.green))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}