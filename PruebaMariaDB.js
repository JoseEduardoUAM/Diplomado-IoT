var mariadb = require('mariadb');

const conecta = mariadb.createPool({
    host: '192.168.1.75',
    user: 'root',
    password:'root',
    database: 'mydb'
})

let dato = async () => {
    try{
      let conecction = await conecta.getConnection();
        const filas = await conecction.query("SELECT * from Escuela")

        filas.forEach( x => {
            console.log( x );
        });

        conecction.release();
    }catch(err){
        return err
    }
}

let insertar = async () => {
    try{
      let conecction = await conecta.getConnection();
        const filas = await conecction.query("INSERT INTO Escuela (idEscuela,nombre,direccion,telefono) VALUE (3,'genaro','Azcapotzalco',5523561547)" )
        console.log( filas[0] );
        conecction.release();
    }catch(err){
        console.log(err);
    }
}

console.log("Esta iniciado");

dato();

insertar();

