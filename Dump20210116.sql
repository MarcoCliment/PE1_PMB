-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: placemybet
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `apuestas`
--

DROP TABLE IF EXISTS `apuestas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `apuestas` (
  `idApuestas` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `idMercado` int NOT NULL,
  `tipoApuesta` varchar(45) NOT NULL,
  `cuota` double NOT NULL,
  `montoApuesta` double NOT NULL,
  `fecha` date NOT NULL,
  `evento` int NOT NULL,
  PRIMARY KEY (`idApuestas`),
  KEY `FK_Mercados_idx` (`idMercado`),
  KEY `FK_Usuarios_idx` (`email`),
  KEY `FK_Eventos_idx` (`evento`),
  CONSTRAINT `FK_Eventos` FOREIGN KEY (`evento`) REFERENCES `eventos` (`idEvento`),
  CONSTRAINT `FK_Mercados` FOREIGN KEY (`idMercado`) REFERENCES `mercados` (`idMercado`),
  CONSTRAINT `FK_Usuarios` FOREIGN KEY (`email`) REFERENCES `usuarios` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `apuestas`
--

LOCK TABLES `apuestas` WRITE;
/*!40000 ALTER TABLE `apuestas` DISABLE KEYS */;
INSERT INTO `apuestas` VALUES (1,'cem201409@gmail.com',4,'Over',1.43,100,'1996-05-20',1),(4,'cem201409@gmail.com',1,'Under',2.85,101,'2006-11-20',1),(5,'cem201409@gmail.com',4,'Over',1.33475,150,'2020-11-01',1),(6,'cem201409@gmail.com',4,'Over',1.1039,150,'2020-11-01',1);
/*!40000 ALTER TABLE `apuestas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bancos`
--

DROP TABLE IF EXISTS `bancos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bancos` (
  `numTarjeta` int NOT NULL,
  `nombreBanco` varchar(45) NOT NULL,
  `saldoActual` double NOT NULL,
  PRIMARY KEY (`numTarjeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bancos`
--

LOCK TABLES `bancos` WRITE;
/*!40000 ALTER TABLE `bancos` DISABLE KEYS */;
INSERT INTO `bancos` VALUES (2252222,'Bankia',2364),(5421681,'Sabadell',23.44),(9874562,'LaCaixa',15544);
/*!40000 ALTER TABLE `bancos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `idEvento` int NOT NULL,
  `equipoLocal` varchar(45) NOT NULL,
  `equipoVisitante` varchar(45) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`idEvento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,'Valencia','Getafe','1996-11-02'),(2,'Getafe','Barcelona','2000-05-01'),(3,'Atlético M','Real Sociedad','2002-04-21'),(4,'Betis','Sevilla','2005-04-15');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mercados`
--

DROP TABLE IF EXISTS `mercados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mercados` (
  `idEvento` int NOT NULL,
  `idMercado` int NOT NULL,
  `overUnder` double NOT NULL,
  `cuotaOver` double NOT NULL,
  `cuotaUnder` double NOT NULL,
  `dineroOver` double NOT NULL,
  `dineroUnder` double NOT NULL,
  PRIMARY KEY (`idMercado`),
  KEY `idEvento_idx` (`idEvento`),
  CONSTRAINT `FK_idEvento` FOREIGN KEY (`idEvento`) REFERENCES `eventos` (`idEvento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mercados`
--

LOCK TABLES `mercados` WRITE;
/*!40000 ALTER TABLE `mercados` DISABLE KEYS */;
INSERT INTO `mercados` VALUES (1,1,1.5,1.43,2.85,100,50),(1,2,2.5,1.9,1.9,50,100),(1,3,3.5,2.85,1.43,23.45,20),(2,4,2.5,1.0461875,10.332716049382714,400,40.5),(2,5,1.5,1.43,2.85,50,100),(2,6,3.5,2.85,1.43,100,50);
/*!40000 ALTER TABLE `mercados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `email` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellidos` varchar(45) NOT NULL,
  `credenciales` varchar(45) NOT NULL,
  `edad` int DEFAULT NULL,
  `banco` int NOT NULL,
  `fechaAlta` date NOT NULL,
  PRIMARY KEY (`email`),
  KEY `Banco_idx` (`banco`),
  CONSTRAINT `Banco` FOREIGN KEY (`banco`) REFERENCES `bancos` (`numTarjeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('artvenere@gmail.com','Art','Venere','usuario',21,5421681,'2021-01-14'),('cem201409@gmail.com','Marco','Climent','usuario',24,5421681,'2020-10-05'),('donettefoller@gmail.com','Donette','Foller','usuario',56,5421681,'2021-01-13'),('ionibowcher@gmail.com','Ioni ','Bowcher','usuario',25,5421681,'2021-01-15'),('kevinmortazar@gmail.com','Kevin','Mortazar','usuario',44,9874562,'2021-01-16'),('lennapaprocki@gmail.com','Lena','Paprocki','usuario',85,5421681,'2021-01-14'),('mitsuetollner@gmail.com','Mitsue','Tollner','usuario',23,5421681,'2021-01-12'),('sagewieser@gmail.com','Sage','Wieser','usuario',18,5421681,'2021-01-10');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-16 22:26:12
