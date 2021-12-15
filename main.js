var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '192.168.1.67',
  user     : 'JoseEduardo',
  password : 'eduardo112233',
  database : 'mydb'
});
 
connection.connect();

const {promisify} = require('util');

connection.query = promisify( connection.query );

async function Consulta(){
	try{
	  let res = await connection.query('SELECT * from escuela');
	  if( res.length > 0 ){
		console.log( res[0] );
	  }else{
		console.log("No hay nada bro");
	  }
	  connection.end();
	}catch(error){
		console.log( error );
	}
}

Consulta();