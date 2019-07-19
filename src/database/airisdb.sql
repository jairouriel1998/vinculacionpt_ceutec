-- creando basedatos --

create database airisdb;

-- usar airisdb --

use airisdb;

-- tablas --

create table customer(
    id int(6) unsigned auto_increment primary key,
    name varchar(50) not null,
    address varchar(100) not null,
    phone varchar(15)
);

