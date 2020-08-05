CREATE DATABASE  IF NOT EXISTS `patientportal` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `patientportal`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: patientportal
-- ------------------------------------------------------
-- Server version	5.7.30-log

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
-- Table structure for table `assessment`
--

DROP TABLE IF EXISTS `assessment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assessment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assessment`
--

LOCK TABLES `assessment` WRITE;
/*!40000 ALTER TABLE `assessment` DISABLE KEYS */;
INSERT INTO `assessment` VALUES (1,'Too Tall'),(2,'Too Short'),(3,'Lateral Shifting'),(4,'Medial Shifting'),(5,'No Toe Clearance'),(6,'Too Tight'),(7,'Chaffing'),(8,'Pistoning'),(9,'Increased Volume'),(10,'Decreased Volume'),(11,'Rotating');
/*!40000 ALTER TABLE `assessment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diabetic_shoe`
--

DROP TABLE IF EXISTS `diabetic_shoe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diabetic_shoe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diabetic_shoe` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diabetic_shoe`
--

LOCK TABLES `diabetic_shoe` WRITE;
/*!40000 ALTER TABLE `diabetic_shoe` DISABLE KEYS */;
INSERT INTO `diabetic_shoe` VALUES (1,'Shoes'),(2,'Insert'),(3,'Shoes + Insert');
/*!40000 ALTER TABLE `diabetic_shoe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnoses`
--

DROP TABLE IF EXISTS `diagnoses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnoses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `patientid` int(11) NOT NULL,
  `prosthetic_type` int(11) DEFAULT NULL,
  `orthotic_type` int(11) DEFAULT NULL,
  `diabetic_shoe` int(11) DEFAULT NULL,
  `diagnosistypeid` int(11) NOT NULL,
  `diagnoses_obj_id` int(11) DEFAULT NULL,
  `diagnoses_ass_id` int(11) DEFAULT NULL,
  `planid` int(11) DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `diagnosisid_idx` (`diagnosistypeid`),
  KEY `patientid_idx` (`patientid`),
  KEY `objectiveid_idx` (`diagnoses_obj_id`),
  KEY `assessmentid_idx` (`diagnoses_ass_id`),
  KEY `planid_idx` (`planid`),
  CONSTRAINT `diabetic_shoe_id` FOREIGN KEY (`id`) REFERENCES `diabetic_shoe` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `diagnoses_ass_id` FOREIGN KEY (`diagnoses_ass_id`) REFERENCES `diagnoses_assessment` (`diagnoses_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `diagnoses_obj_id` FOREIGN KEY (`diagnoses_obj_id`) REFERENCES `diagnoses_objectives` (`diagnoses_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `diagnosistypeid` FOREIGN KEY (`diagnosistypeid`) REFERENCES `diagnosistype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `orthotic_type_id` FOREIGN KEY (`id`) REFERENCES `orthotic_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `patientid` FOREIGN KEY (`patientid`) REFERENCES `patientinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `planid` FOREIGN KEY (`planid`) REFERENCES `plan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `prosthetic_type_id` FOREIGN KEY (`id`) REFERENCES `prosthetic_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnoses`
--

LOCK TABLES `diagnoses` WRITE;
/*!40000 ALTER TABLE `diagnoses` DISABLE KEYS */;
INSERT INTO `diagnoses` VALUES (7,5,3,NULL,NULL,5,7,7,1,'2020-07-31 14:35:26'),(9,7,3,NULL,NULL,2,NULL,NULL,5,'2020-07-31 14:42:03'),(10,7,NULL,1,NULL,1,10,NULL,1,'2020-07-31 14:44:04'),(11,8,3,NULL,NULL,4,NULL,NULL,1,'2020-07-31 14:58:39'),(12,2,2,NULL,NULL,4,NULL,NULL,1,'2020-07-31 15:01:14'),(20,2,2,NULL,NULL,1,NULL,NULL,2,'2020-08-03 16:26:45'),(21,3,2,NULL,NULL,5,21,21,1,'2020-08-03 16:35:25'),(22,4,NULL,2,NULL,1,22,22,2,'2020-08-03 16:40:13'),(23,6,3,NULL,NULL,5,23,23,1,'2020-08-03 16:59:42'),(24,9,NULL,NULL,1,1,24,24,1,'2020-08-03 17:02:42'),(25,10,NULL,NULL,3,4,NULL,NULL,1,'2020-08-03 17:12:46'),(26,10,NULL,1,NULL,3,26,26,1,'2020-08-03 17:16:55'),(27,11,2,NULL,NULL,1,27,27,2,'2020-08-03 17:23:34'),(28,11,2,NULL,NULL,4,NULL,NULL,1,'2020-08-03 17:27:22');
/*!40000 ALTER TABLE `diagnoses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnoses_assessment`
--

DROP TABLE IF EXISTS `diagnoses_assessment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnoses_assessment` (
  `diagnoses_id` int(11) NOT NULL AUTO_INCREMENT,
  `assessment_id` int(11) NOT NULL,
  PRIMARY KEY (`diagnoses_id`,`assessment_id`),
  KEY `assessment_id_idx` (`assessment_id`),
  CONSTRAINT `diagnoses_ass_id#` FOREIGN KEY (`assessment_id`) REFERENCES `assessment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `diagnoses_id#` FOREIGN KEY (`diagnoses_id`) REFERENCES `diagnoses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnoses_assessment`
--

LOCK TABLES `diagnoses_assessment` WRITE;
/*!40000 ALTER TABLE `diagnoses_assessment` DISABLE KEYS */;
INSERT INTO `diagnoses_assessment` VALUES (21,1),(26,3),(26,4),(7,6),(22,7),(27,7),(27,8),(23,9),(26,9);
/*!40000 ALTER TABLE `diagnoses_assessment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnoses_objectives`
--

DROP TABLE IF EXISTS `diagnoses_objectives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnoses_objectives` (
  `diagnoses_id` int(11) NOT NULL AUTO_INCREMENT,
  `objectives_id` int(11) NOT NULL,
  PRIMARY KEY (`diagnoses_id`,`objectives_id`),
  KEY `diagnoses_id_idx` (`diagnoses_id`,`objectives_id`),
  KEY `objective_id_idx` (`objectives_id`),
  CONSTRAINT `diagnoses_id` FOREIGN KEY (`diagnoses_id`) REFERENCES `diagnoses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `diagnoses_obj_id2` FOREIGN KEY (`objectives_id`) REFERENCES `objective` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnoses_objectives`
--

LOCK TABLES `diagnoses_objectives` WRITE;
/*!40000 ALTER TABLE `diagnoses_objectives` DISABLE KEYS */;
INSERT INTO `diagnoses_objectives` VALUES (7,1),(22,1),(23,1),(7,2),(22,2),(23,2),(7,3),(21,3),(23,3),(7,4),(21,4),(26,5),(27,6),(27,7),(23,8),(26,8),(22,9);
/*!40000 ALTER TABLE `diagnoses_objectives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnosistype`
--

DROP TABLE IF EXISTS `diagnosistype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diagnosistype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `diagnosis` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnosistype`
--

LOCK TABLES `diagnosistype` WRITE;
/*!40000 ALTER TABLE `diagnosistype` DISABLE KEYS */;
INSERT INTO `diagnosistype` VALUES (1,'Fitting'),(2,'Evaluation'),(3,'Consultation'),(4,'Delivery'),(5,'Adjustment');
/*!40000 ALTER TABLE `diagnosistype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objective`
--

DROP TABLE IF EXISTS `objective`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objective` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objectivename` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `objectivename_UNIQUE` (`objectivename`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objective`
--

LOCK TABLES `objective` WRITE;
/*!40000 ALTER TABLE `objective` DISABLE KEYS */;
INSERT INTO `objective` VALUES (8,'Blister'),(7,'Callusing'),(5,'Looseness'),(9,'Open Sore'),(1,'Pain'),(2,'Pressure'),(6,'Redness'),(3,'Rubbing'),(4,'Tightness'),(10,'Ulcer');
/*!40000 ALTER TABLE `objective` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orthotic_type`
--

DROP TABLE IF EXISTS `orthotic_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orthotic_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orthotic_type` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orthotic_type`
--

LOCK TABLES `orthotic_type` WRITE;
/*!40000 ALTER TABLE `orthotic_type` DISABLE KEYS */;
INSERT INTO `orthotic_type` VALUES (1,'Back Brace'),(2,'Knee Brace'),(3,'Ankle Brace');
/*!40000 ALTER TABLE `orthotic_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patientinfo`
--

DROP TABLE IF EXISTS `patientinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patientinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `DateOfBirth` varchar(20) DEFAULT NULL,
  `email` varchar(85) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patientinfo`
--

LOCK TABLES `patientinfo` WRITE;
/*!40000 ALTER TABLE `patientinfo` DISABLE KEYS */;
INSERT INTO `patientinfo` VALUES (2,'Oscar Pistorius','11/22/86','oscarp86@yahoo.com','205-867-5309','2020-07-29 16:29:53'),(3,'Josh Hurn','6/10/92','josh@innovatebham.com','205-911-1119','2020-07-29 16:34:47'),(4,'Nancy Kerrigan','10/13/69','NancyK69@gmail.com','781-339-1992','2020-07-29 16:52:18'),(5,'Heather Mills','1/12/68','hmills68@earthlink.net','281-330-8004','2020-07-29 17:00:54'),(6,'Jim Abbott','9/19/67','jabbott@milwauleebrewers.com','810-671-8834','2020-07-29 17:05:58'),(7,'Miles O\'brien','6/9/59','milesob@pbs.org','810-775-9954','2020-07-29 17:10:34'),(8,'Bethany Hamilton','2/8/90','soulsurfer@gmail.com','808-762-9003','2020-07-30 10:08:57'),(9,'Rick Allen','11/1/63','1armdrummer@def.leppard.com','310-314-5513','2020-07-30 10:12:31'),(10,'Frida Kahlo','7/6/07','vivalavida@yahoo.com','303-998-1191','2020-07-30 10:19:02'),(11,'Amy Purdy','11/7/79','onmyown2feet@paralympics.org','702-334-8655','2020-07-30 10:22:31');
/*!40000 ALTER TABLE `patientinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (1,'Issue Resolved'),(2,'1 Week Follow Up'),(3,'Limited Time Wear'),(4,'Unlimited Time Wear'),(5,'Refer to Specialist');
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prosthetic_type`
--

DROP TABLE IF EXISTS `prosthetic_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prosthetic_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `prosthetic_name` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prosthetic_type`
--

LOCK TABLES `prosthetic_type` WRITE;
/*!40000 ALTER TABLE `prosthetic_type` DISABLE KEYS */;
INSERT INTO `prosthetic_type` VALUES (1,'AK'),(2,'BK'),(3,'Arm'),(4,'Partial Foot');
/*!40000 ALTER TABLE `prosthetic_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-04 10:51:03
