let arregloPreguntas = [
    'Escribe tu nombre completo: ','Escribe tu Edad: ','Escribe tu numero de matricula: ','Escribe tu unidad academica: '
];

process.stdin.resume();
process.stdin.setEncoding('utf8');

let datos = {};

function obtenerDatos( indice , colback ){
    colback( indice );
}

obtenerDatos( 1 , function(indice) {
    process.stdout.write( arregloPreguntas[0] );
    process.stdin.on('data', function (data) {
        datos[ arregloPreguntas[indice-1] ] = data;
        if( indice < arregloPreguntas.length ){
            process.stdout.write( arregloPreguntas[indice] );
            indice++;
        }else{
            console.log( datos );
            process.exit();
        }
    })
})
