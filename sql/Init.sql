create database catbook;
use catbook;

create user 'admin'@'%' identified with mysql_native_password by 'admin';
grant all privileges on *.* to 'admin'@'%' with grant option;
flush privileges;

create table cats (
    id int not null auto_increment,  
    name varchar(20), 
    username varchar(20), 
    password varchar(100), 
    email varchar (50), 
    primary key (id)
);

INSERT INTO `catbook`.`cats` (`name`, `username`, `password`, `email`) VALUES 
('Cat1', 'cat1', 'cat1', 'cat1@test.com'),
('Cat2', 'cat2', 'cat2', 'cat2@test.com'),
('Cat3', 'cat3', 'cat3', 'cat3@test.com'),
('Cat4', 'cat4', 'cat4', 'cat4@test.com'),
('Cat5', 'cat5', 'cat5', 'cat5@test.com');