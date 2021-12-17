INSERT INTO hospital.seccion (idSec,nombreSec) VALUES ( 0 ,"Registro");
INSERT INTO hospital.seccion (idSec,nombreSec) VALUES ( 0 ,"Entrada");
INSERT INTO hospital.seccion (idSec,nombreSec) VALUES ( 0 ,"Salida");
INSERT INTO hospital.seccion (idSec,nombreSec) VALUES ( 0 ,"Visitante");
INSERT INTO hospital.seccion (idSec,nombreSec) VALUES ( 0 ,"Paciente");

INSERT INTO hospital.administrativo (idAdm,nombreAdm,apellido1Adm,apellido2Adm,matricula,pwd) VALUES (0,"root","","",0123456789,aes_encrypt("root","uam"));

INSERT INTO hospital.encargado (idEnc,idAdm,idSec) VALUES (0,1,1);
INSERT INTO hospital.encargado (idEnc,idAdm,idSec) VALUES (0,1,2);
INSERT INTO hospital.encargado (idEnc,idAdm,idSec) VALUES (0,1,3);
INSERT INTO hospital.encargado (idEnc,idAdm,idSec) VALUES (0,1,4);
INSERT INTO hospital.encargado (idEnc,idAdm,idSec) VALUES (0,1,5);
