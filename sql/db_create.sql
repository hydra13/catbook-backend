create database catbook;
use catbook;
create table cats (id int not null auto_increment,  name varchar(20), username varchar(20), password varchar(100), email varchar (50), primary key (id));

-- insert into cats(name, username, password, email) values ('test', 'test', 'test', 'test@test.com');
-- select * from cats;

-- create user 'admin'@'%' identified with mysql_native_password by 'admin';
-- grant all privileges on *.* to 'admin'@'%' with grant option;
-- flush privileges;