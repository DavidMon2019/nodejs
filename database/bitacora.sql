#crear base de datos bitacora
create database bitacora;
use bitacora;

#crear tabla usuarios
create table usuarios(
	codigo_usuario integer not null primary key,
    nombre_usuario varchar(50) not null,
    password_usuario varchar(30) not null
);
select * from usuarios;

#crear tabla registro
create table registros(
	id_registro integer not null auto_increment primary key,
    nombre_registro varchar(100),
    comentario varchar(100),
    fecha date,
    hora integer,
    codigo_usuario integer
);
