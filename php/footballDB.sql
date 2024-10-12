DROP DATABASE IF EXISTS `footballDB`;


CREATE DATABASE /*!32312 IF NOT EXISTS*/ `footballDB` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `footballDB`;

--
-- Table structure for table `club`
--

DROP TABLE IF EXISTS `club`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
CREATE TABLE `club` (
  `name` char(128) DEFAULT NULL,
  `ground` char(128) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
SET character_set_client = @saved_cs_client;

--
-- Dumping data for table `club`
--

LOCK TABLES `club` WRITE;
/*!40000 ALTER TABLE `club` DISABLE KEYS */;
INSERT INTO `club` VALUES ('Liverpool','Anfield'),('Barcelona','Nou Camp'),('Man City','Etihad Stadium'),('Bournemouth','Vitality Stadium'),('New England Revolution','Gilltete Stadium'),('Finn Harps','Finn Park'),('Everton','Goodison Park');
/*!40000 ALTER TABLE `club` ENABLE KEYS */;
UNLOCK TABLES;
