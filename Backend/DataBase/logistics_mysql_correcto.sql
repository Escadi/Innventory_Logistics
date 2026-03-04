
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
    cifProveedor INT PRIMARY KEY,
    nombreProveedor VARCHAR(100),
    direccionProveedor VARCHAR(150),
    telefonoProveedor VARCHAR(20),
    emailProveedor VARCHAR(100),
    idCategoria INT,
    FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria)
);

CREATE TABLE IF NOT EXISTS clientes (
    cifCliente VARCHAR(20) PRIMARY KEY,
    nombreCliente VARCHAR(100),
    direccionCliente VARCHAR(150),
    telefonoCliente VARCHAR(20),
    correoCliente VARCHAR(100),
    codigoPostalCliente VARCHAR(10),
    ciudadCliente VARCHAR(100),
    paisCliente VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS tipoVehiculo_temp_check (
    dummy INT
);

DROP TABLE tipoVehiculo_temp_check;

CREATE TABLE IF NOT EXISTS vehiculo (
    matricula VARCHAR(20) PRIMARY KEY,
    placa VARCHAR(20),
    marca VARCHAR(50),
    modelo VARCHAR(50),
    idTipo INT,
    FOREIGN KEY (idTipo) REFERENCES tipoVehiculo(idTipo)
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
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    nombreProducto VARCHAR(100),
    idEmpleado INT,
    idProveedor INT,
    idCategoria INT,
    FOREIGN KEY (idEmpleado) REFERENCES empleado(idEmpleado),
    FOREIGN KEY (idProveedor) REFERENCES proveedor(cifProveedor),
    FOREIGN KEY (idCategoria) REFERENCES categoria(idCategoria)
);

CREATE TABLE IF NOT EXISTS detallesProducto (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idProducto INT,
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
    estado VARCHAR(50),
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
('Electrónica'),
('Alimentación'),
('Ropa');

INSERT INTO departamento (nombreDepartamento) VALUES
('Ventas'),
('Logística'),
('Administración');

INSERT INTO centroTrabajo (nombreCentro) VALUES
('Centro Madrid'),
('Centro Barcelona');

INSERT INTO cargo (nombreCargo) VALUES
('Gerente'),
('Empleado'),
('Supervisor');

INSERT INTO tipoVehiculo (tipoVehiculo) VALUES
('Camión'),
('Furgoneta');

INSERT INTO proveedor (cifProveedor,nombreProveedor,direccionProveedor,telefonoProveedor,emailProveedor,idCategoria) VALUES
(1001,'Proveedor Tech','Calle A','600111111','tech@mail.com',1),
(1002,'Proveedor Food','Calle B','600222222','food@mail.com',2);

INSERT INTO clientes VALUES
('CIF001','Cliente Uno','Calle 1','611111111','c1@mail.com','35001','Las Palmas','España'),
('CIF002','Cliente Dos','Calle 2','622222222','c2@mail.com','35002','Las Palmas','España');

INSERT INTO vehiculo (matricula,placa,marca,modelo,idTipo) VALUES
('1234ABC','PLACA1','Mercedes','Actros',1),
('5678DEF','PLACA2','Ford','Transit',2);

INSERT INTO empleado (nombre,apellido,email,telefono,idCentro,idCargo,idDepartamento) VALUES
('Juan','Perez','juan@mail.com','600000001',1,1,1),
('Ana','Garcia','ana@mail.com','600000002',2,2,2);

INSERT INTO producto (nombreProducto,idEmpleado,idProveedor,idCategoria) VALUES
('Portatil',1,1001,1),
('Camiseta',2,1002,3);

INSERT INTO detallesProducto (idProducto,idDepartamento,cantidad) VALUES
(1,2,50),
(2,1,30);

INSERT INTO pedido (idCliente,idCentro,idEmpleado,fechaPedido,estado) VALUES
('CIF001',1,1,'2024-01-01','Pendiente'),
('CIF002',2,2,'2024-01-05','En proceso');

INSERT INTO detallePedido (idDetalleProducto,cantidad) VALUES
(1,5),
(2,3);

INSERT INTO detalleCarrito (idDetalleProducto,cantidad) VALUES
(1,2),
(2,1);

INSERT INTO conductor (nombre,apellido,telefono,email,idVehiculo) VALUES
('Carlos','Ruiz','633333333','carlos@mail.com','1234ABC'),
('Pedro','Lopez','644444444','pedro@mail.com','5678DEF');

INSERT INTO ordenDeEntrega (idPedido,fechaEntrega,idConductor,estado) VALUES
(1,'2024-01-03',1,'En reparto'),
(2,'2024-01-07',2,'Pendiente');
