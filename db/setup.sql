CREATE DATABASE slick;

ALTER USER 'root'@'localhost' IDENTIFIED BY 'root123'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';

FLUSH PRIVILEGES;