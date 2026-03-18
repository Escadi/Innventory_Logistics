
CREATE DATABASE IF NOT EXISTS logistics;
USE logistics;

CREATE TABLE IF NOT EXISTS categoria (
    idCategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombreCategoria VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS departamento (
    idDepartamento INT AUTO_INCREMENT PRIMARY KEY,
    nombreDepartamento VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS centroTrabajo (
    idCentro INT AUTO_INCREMENT PRIMARY KEY,
    nombreCentro VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS cargo (
    idCargo INT AUTO_INCREMENT PRIMARY KEY,
    nombreCargo VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS tipoVehiculo (
    idTipo INT AUTO_INCREMENT PRIMARY KEY,
    tipoVehiculo VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS proveedor (
    CifProveedor INT PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(150),
    telefono VARCHAR(20),
    email VARCHAR(100),
    idCategoria INT,
    FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria)
);

CREATE TABLE IF NOT EXISTS clientes (
    cifCliente VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(150),
    telefono VARCHAR(20),
    correo VARCHAR(100),
    codigoPostal VARCHAR(10),
    ciudad VARCHAR(100),
    pais VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS vehiculo (
    matricula VARCHAR(20) PRIMARY KEY,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    color VARCHAR(100),
    idTipo INT,
    estado VARCHAR(50) DEFAULT 'Activo',
    FOREIGN KEY (idTipo) REFERENCES tipoVehiculo(idTipo)
);

CREATE TABLE IF NOT EXISTS vehiculoConductor (
    idVehiculoConductor INT AUTO_INCREMENT PRIMARY KEY,
    matricula VARCHAR(20),
    idConductor INT,
    fechaRecogidaVehiculo DATE,
    fechaDevolucionVehiculo DATE,
    FOREIGN KEY (matricula) REFERENCES vehiculo(matricula),
    FOREIGN KEY (idConductor) REFERENCES conductor(idConductor)
);

CREATE TABLE IF NOT EXISTS empleado (
    idEmpleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20),
    idCentro INT,
    idCargo INT,
    idDepartamento INT,
    FOREIGN KEY (idCentro) REFERENCES centroTrabajo(idCentro),
    FOREIGN KEY (idCargo) REFERENCES cargo(idCargo),
    FOREIGN KEY (idDepartamento) REFERENCES departamento(idDepartamento)
);

CREATE TABLE IF NOT EXISTS producto (
    idProducto VARCHAR(255) PRIMARY KEY,
    nombreProducto VARCHAR(100),
    descripcion VARCHAR(255),
    precio DECIMAL(10,2),
    idEmpleado INT,
    idProveedor INT,
    idCategoria INT,
    FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado),
    FOREIGN KEY (idProveedor) REFERENCES proveedor(CifProveedor),
    FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria)
);

CREATE TABLE IF NOT EXISTS detallesProducto (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idProducto VARCHAR(255),
    idDepartamento INT,
    cantidad INT,
    FOREIGN KEY (idProducto) REFERENCES producto(idProducto),
    FOREIGN KEY (idDepartamento) REFERENCES departamento(idDepartamento)
);

CREATE TABLE IF NOT EXISTS pedido (
    idPedido INT AUTO_INCREMENT PRIMARY KEY,
    idCliente VARCHAR(20),
    idCentro INT,
    idEmpleado INT,
    fechaPedido DATE,
    estado VARCHAR(50) DEFAULT 'Pendiente',
    FOREIGN KEY (idCliente) REFERENCES clientes(cifCliente),
    FOREIGN KEY (idCentro) REFERENCES centroTrabajo(idCentro),
    FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado)
);

CREATE TABLE IF NOT EXISTS detallePedido (
    idDetallePedido INT AUTO_INCREMENT PRIMARY KEY,
    idDetalleProducto INT,
    cantidad INT,
    FOREIGN KEY (idDetalleProducto) REFERENCES detallesProducto(idDetalle)
);

CREATE TABLE IF NOT EXISTS detalleCarrito (
    idDetalleCarrito INT AUTO_INCREMENT PRIMARY KEY,
    idDetalleProducto INT,
    cantidad INT,
    FOREIGN KEY (idDetalleProducto) REFERENCES detallesProducto(idDetalle)
);

CREATE TABLE IF NOT EXISTS conductor (
    idConductor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(100),
    idVehiculo VARCHAR(20),
    FOREIGN KEY (idVehiculo) REFERENCES vehiculo(matricula)
);

CREATE TABLE IF NOT EXISTS ordenDeEntrega (
    idOrdenDeEntrega INT AUTO_INCREMENT PRIMARY KEY,
    idPedido INT,
    fechaEntrega DATE,
    idConductor INT,
    estado VARCHAR(50),
    FOREIGN KEY (idPedido) REFERENCES pedido(idPedido),
    FOREIGN KEY (idConductor) REFERENCES conductor(idConductor)
);

INSERT INTO categoria (nombreCategoria) VALUES
('Ropa'),
('Hogar'),
('Deporte'),
('Papelería'),
('Electrónica'),
('Alimentación');



INSERT INTO departamento (nombreDepartamento) VALUES
('Administración'),
('Recursos Humanos'),
('Marketing'),
('Atención al Cliente'),
('Ventas'),
('Logística');

INSERT INTO centroTrabajo (nombreCentro) VALUES
('Centro Valencia'),
('Centro Sevilla'),
('Centro Bilbao'),
('Centro Las Palmas'),
('Centro Madrid'),
('Centro Barcelona');

INSERT INTO cargo (nombreCargo) VALUES
('Auxiliar'),
('Técnico'),
('Responsable'),
('Gerente'),
('Empleado'),
('Supervisor');

INSERT INTO tipoVehiculo (tipoVehiculo) VALUES
('Camión'),        
('Furgoneta'),     
('Coche'),         
('Moto'),          
('Bicicleta'),     
('Patinete'),      
('Barco'),         
('Trailer'),       
('Pickup'),        
('Todoterreno'),   
('Autobús'),       
('Scooter'),       
('Quad'),          
('Tractor'),       
('Remolque'),      
('Furgón'),        
('Microbús');      

INSERT INTO proveedor (CifProveedor,nombre,direccion,telefono,email,idCategoria) VALUES
(1001,'Proveedor Tech','Calle A','600111111','tech@mail.com',1),
(1002,'Proveedor Food','Calle B','600222222','food@mail.com',2),
(1003,'Proveedor Moda','Calle C','600333333','moda@mail.com',3),
(1004,'Proveedor Hogar','Calle D','600444444','hogar@mail.com',4),
(1005,'Proveedor Fresh','Calle E','600555555','fresh@mail.com',2),
(1006,'Proveedor Sport','Calle F','600666666','sport@mail.com',5),
(1007,'Proveedor Digital','Calle G','600777777','digital@mail.com',1),
(1008,'Proveedor Gourmet','Calle H','600888888','gourmet@mail.com',2),
(1009,'Proveedor Textil Plus','Calle I','600999999','textilplus@mail.com',3),
(1010,'Proveedor Movil','Calle J','601000000','movil@mail.com',1);


INSERT INTO clientes (cifCliente,nombre,direccion,telefono,correo,codigoPostal,ciudad,pais) VALUES
('CIF001','Cliente Uno','Calle 1','611111111','c1@mail.com','35001','Las Palmas','España'),
('CIF002','Cliente Dos','Calle 2','622222222','c2@mail.com','35002','Las Palmas','España'),
('CIF003','Cliente Tres','Avenida Mar','633111111','c3@mail.com','35003','Las Palmas','España'),
('CIF004','Cliente Cuatro','Calle Sol','633222222','c4@mail.com','28001','Madrid','España'),
('CIF005','Cliente Cinco','Calle Luna','633333333','c5@mail.com','08001','Barcelona','España'),
('CIF006','Cliente Seis','Calle Norte','633444444','c6@mail.com','41001','Sevilla','España'),
('CIF007','Cliente Siete','Calle Sur','633555555','c7@mail.com','46001','Valencia','España'),
('CIF008','Cliente Ocho','Calle Este','633666666','c8@mail.com','50001','Zaragoza','España'),
('CIF009','Cliente Nueve','Calle Pino 12','611000001','c9@mail.com','35004','Las Palmas','España'),
('CIF010','Cliente Diez','Calle Palmera 8','611000002','c10@mail.com','35005','Las Palmas','España'),
('CIF011','Cliente Once','Avenida Mesa 4','611000003','c11@mail.com','28002','Madrid','España'),
('CIF012','Cliente Doce','Calle Real 10','611000004','c12@mail.com','08002','Barcelona','España'),
('CIF013','Cliente Trece','Calle Mayor 7','611000005','c13@mail.com','29001','Málaga','España'),
('CIF014','Cliente Catorce','Calle León 6','611000006','c14@mail.com','15001','A Coruña','España'),
('CIF015','Cliente Quince','Avenida Puerto 15','611000007','c15@mail.com','03001','Alicante','España'),
('CIF016','Cliente Dieciseis','Calle Arena 21','611000008','c16@mail.com','11001','Cádiz','España');


INSERT INTO vehiculo (matricula,marca,modelo,color,idTipo,estado) VALUES
('1010QRS', 'Jeep', 'Wrangler', 'Verde', 10, 'Activo'),
('1122PQR', 'Honda', 'CBR 600 RR', 'Gris', 4, 'disponible'),
('1212TUV', 'MAN', 'TGX', 'Gris', 8, 'Activo'),
('1234ABC', 'Mercedes', 'Actros', 'Blanco', 1, 'Activo'),
('1313WXY', 'Fiat', 'Ducato', 'Blanco', 16, 'Activo'),
('2233EFG', 'Honda', 'PCX', 'Negro', 12, 'Activo'),
('3265JJJ', 'Opel', 'Corseta', 'Verde', 6, 'disponible'),
('3344STU', 'Orbea', 'Urban', 'Verde', 5, 'Activo'),
('3456JKL', 'Renault', 'Kangoo', 'Azul', 2, 'Activo'),
('4455HIJ', 'Kymco', 'Agility', 'Rojo', 12, 'Activo'),
('5566VWX', 'Peugeot', 'Partner', 'Blanco', 2, 'Activo'),
('5678DEF', 'Ford', 'Transit', 'Negro', 2, 'Activo'),
('6677KLM', 'Toyota', 'Hilux', 'Blanco', 9, 'Activo'),
('7788YZA', 'Citroen', 'Berlingo', 'Gris', 2, 'Activo'),
('7890MNO', 'Seat', 'Ibiza', 'Rojo', 3, 'Activo'),
('8899NOP', 'Nissan', 'Navara', 'Negro', 9, 'Activo');

INSERT INTO empleado (nombre,apellido,email,telefono,idCentro,idCargo,idDepartamento) VALUES
('Juan','Perez','juan@mail.com','600000001',1,1,1),
('Ana','Garcia','ana@mail.com','600000002',2,2,2),
('Luis','Martinez','luis@mail.com','600000003',1,2,1),
('Marta','Sanchez','marta@mail.com','600000004',2,3,2),
('Pedro','Ramirez','pedro.r@mail.com','600000005',1,2,3),
('Lucia','Fernandez','lucia@mail.com','600000006',2,1,1),
('Diego','Navarro','diego@mail.com','600000007',1,3,2),
('Elena','Morales','elena@mail.com','600000008',2,2,3),
('Carmen','Ortiz','carmen@mail.com','600000009',3,2,1),
('Roberto','Gil','roberto@mail.com','600000010',4,2,2),
('Patricia','Cruz','patricia@mail.com','600000011',5,3,3),
('Andres','Herrera','andres@mail.com','600000012',3,2,1),
('Nuria','Vega','nuria@mail.com','600000013',4,1,2),
('Oscar','Flores','oscar@mail.com','600000014',5,3,3),
('Raquel','Molina','raquel@mail.com','600000015',1,4,4),
('Sonia','Ruiz','sonia@mail.com','600000016',2,5,5),
('David','Castro','david@mail.com','600000017',3,6,6),
('Alba','Suarez','alba@mail.com','600000018',4,2,5),
('Miguel','Leon','miguel.leon@mail.com','600000019',5,4,4),
('Paula','Diaz','paula@mail.com','600000020',1,5,6);


INSERT INTO producto (idProducto,nombreProducto,descripcion,precio,idEmpleado,idProveedor,idCategoria) VALUES
('1','Portatil','Portatil de alta gama',1000.50,1,1001,1),
('2','Camiseta','Camiseta de algodon',20.50,2,1002,3);

INSERT INTO producto (idProducto,nombreProducto,descripcion,precio,idEmpleado,idProveedor,idCategoria) VALUES
('3','Tablet','Tablet de 10 pulgadas',350.99,3,1001,1),
('4','Auriculares','Auriculares inalambricos',79.95,4,1007,1),
('5','Manzanas','Caja de manzanas frescas',15.20,5,1005,2),
('6','Leche','Pack de leche entera',8.75,6,1002,2),
('7','Pantalon','Pantalon vaquero azul',35.50,7,1003,3),
('8','Chaqueta','Chaqueta impermeable',59.99,8,1006,3),
('9','Teclado','Teclado mecanico',120.00,1,1007,1),
('10','Monitor','Monitor 24 pulgadas',199.90,2,1001,1),
('11','Zapatillas','Zapatillas deportivas',49.99,7,1006,5),
('12','Queso','Lote de quesos variados',25.30,8,1008,2),
('13','Smartphone','Telefono movil 128GB',699.99,9,1010,1),
('14','Impresora','Impresora multifuncion',149.95,10,1007,1),
('15','Cafe','Paquete de cafe premium',12.40,11,1008,2),
('16','Galletas','Caja surtida de galletas',6.80,12,1005,2),
('17','Sudadera','Sudadera con capucha',29.90,13,1009,3),
('18','Bufanda','Bufanda de invierno',14.50,14,1003,3),
('19','Raton','Raton inalambrico',24.99,9,1007,1),
('20','Aceite','Botella de aceite oliva',9.99,10,1008,2),
('21','Vestido','Vestido casual mujer',39.95,11,1009,3),
('22','Altavoz','Altavoz bluetooth',45.00,12,1010,1),
('23','Arroz','Saco de arroz 5kg',7.30,13,1002,2),
('24','Camisa','Camisa formal hombre',26.75,14,1003,3),
('25','Lampara','Lampara de escritorio LED',32.90,15,1004,4),
('26','Balon','Balon de futbol profesional',27.50,16,1006,5),
('27','Cuaderno','Cuaderno A4 tapa dura',4.25,17,1004,6),
('28','Mochila','Mochila escolar resistente',21.80,18,1009,3),
('29','Sarten','Sarten antiadherente',18.60,19,1004,4),
('30','Raqueta','Raqueta de tenis',89.99,20,1006,5);



INSERT INTO detallesProducto (idProducto,idDepartamento,cantidad,idCentro) VALUES
('1',2,50,1),
('2',1,30,1);

INSERT INTO detallesProducto (idProducto,idDepartamento,cantidad,idCentro) VALUES
('3',1,40,2),   
('4',1,60,5),   
('5',2,100,5),  
('6',2,80,5),   
('7',1,45,6),   
('8',1,25,5),   
('9',3,35,6),   
('10',3,20,6),  
('11',2,55,2),  
('12',3,70,6),  
('13',1,22,5),  
('14',3,18,2),  
('15',2,90,5),  
('16',2,120,2), 
('17',1,40,6),  
('18',1,65,3),  
('19',3,50,6),  
('20',2,110,5), 
('21',1,28,2),  
('22',3,33,5),  
('23',2,95,6),  
('24',1,47,2),  
('25',3,26,5),  
('26',1,37,5),  
('27',3,150,6), 
('28',1,42,5),  
('29',2,31,2),  
('30',1,19,1);

INSERT INTO pedido (idPedido,cifCliente,idCentro,idEmpleado,fechaPedido,estado) VALUES
(1,'CIF001',1,1,'2024-01-01','Pendiente'),
(2,'CIF002',2,2,'2024-01-05','En proceso');  

INSERT INTO pedido (idPedido,cifCliente,idCentro,idEmpleado,fechaPedido,estado) VALUES
(3,'CIF003',1,3,'2024-01-10','Pendiente'),     
(4,'CIF004',2,4,'2024-01-11','En proceso'),    
(5,'CIF005',1,5,'2024-01-12','Entregado'),     
(6,'CIF006',2,6,'2024-01-13','Pendiente'),     
(7,'CIF007',1,7,'2024-01-14','En proceso'),    
(8,'CIF008',2,8,'2024-01-15','Cancelado'),     
(9,'CIF009',3,9,'2024-01-16','Pendiente'),     
(10,'CIF010',4,10,'2024-01-17','En proceso'),   
(11,'CIF011',5,11,'2024-01-18','Entregado'),    
(12,'CIF012',3,12,'2024-01-19','Pendiente'),    
(13,'CIF013',4,13,'2024-01-20','En proceso'),   
(14,'CIF014',5,14,'2024-01-21','Pendiente'),    
(15,'CIF015',1,9,'2024-01-22','Entregado'),     
(16,'CIF016',2,10,'2024-01-23','Cancelado'); 
 
INSERT INTO detallePedido (idDetalleProducto,cantidad) VALUES
(1,5),
(2,3);

INSERT INTO detallePedido (idDetalleProducto,cantidad) VALUES
(3,4),
(4,2),
(5,10),
(6,6),
(7,3),
(8,1),
(9,5),
(10,7),
(11,2),
(12,1),
(13,6),
(14,8),
(15,3),
(16,5),
(17,2),
(18,4),
(19,1),
(20,7),
(21,3),
(22,2),
(23,9),
(24,4),
(25,2),
(26,3),
(27,6),
(28,2),
(29,1),
(30,2);


INSERT INTO conductor (nombre,apellido,telefono,email,idVehiculo) VALUES
('Carlos','Ruiz','633333333','carlos@mail.com','1234ABC'),
('Pedro','Lopez','644444444','pedro@mail.com','5678DEF'),
('Sergio','Diaz','655111111','sergio@mail.com','1010QRS'),
('Alberto','Suarez','655222222','alberto@mail.com','3456JKL'),
('Raul','Castro','655333333','raul@mail.com','7890MNO'),
('Javier','Mendez','655444444','javier@mail.com','1122PQR'),
('Tomas','Vega','655555555','tomas@mail.com','3344STU'),
('Ivan','Sosa','644000001','ivan@mail.com','5566VWX'),
('Miguel','Reyes','644000002','miguel@mail.com','7788YZA'),
('Adrian','Santana','644000003','adrian@mail.com','6677KLM'),
('Daniel','Perdomo','644000004','daniel@mail.com','2233EFG'),
('Hector','Delgado','644000005','hector@mail.com','4455HIJ');

INSERT INTO ordenDeEntrega (idPedido,fechaEntrega,idConductor,estado) VALUES
(1,'2024-01-03',1,'En reparto'),
(2,'2024-01-07',2,'Pendiente'),
(3,'2024-01-12',3,'En reparto'),
(4,'2024-01-13',4,'Pendiente'),
(5,'2024-01-14',5,'Entregado'),
(6,'2024-01-15',3,'Pendiente'),
(7,'2024-01-16',4,'En reparto'),
(8,'2024-01-17',5,'Cancelada'),
(9,'2024-01-17',8,'Pendiente'),
(10,'2024-01-18',9,'En reparto'),
(11,'2024-01-19',10,'Entregado'),
(12,'2024-01-20',11,'Pendiente'),
(13,'2024-01-21',12,'En reparto'),
(14,'2024-01-22',8,'Pendiente'),
(15,'2024-01-23',9,'Entregado'),
(16,'2024-01-24',10,'Cancelada');

INSERT INTO vehiculoConductor (matricula,idConductor,fechaRecogidaVehiculo,fechaDevolucionVehiculo) VALUES
('1010QRS',1,'2024-01-03','2024-01-07'),
('1122PQR',2,'2024-01-07','2024-01-12'),
('1234ABC',4,'2024-01-17','2024-01-22'),
('1313WXY',5,'2024-01-22','2024-01-27'),
('2233EFG',6,'2024-01-27','2024-02-01'),
('3265JJJ',7,'2024-02-01','2024-02-06'),
('3344STU',8,'2024-02-06','2024-02-11'),
('3456JKL',9,'2024-02-11','2024-02-16'),
('5566VWX',11,'2024-02-21','2024-02-26'),
('5678DEF',12,'2024-02-26','2024-03-03');
