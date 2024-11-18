-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 18, 2024 at 10:50 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

DROP DATABASE IF EXISTS uselections;

CREATE DATABASE uselections;

USE uselections;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `uselections`
--

-- --------------------------------------------------------

--
-- Table structure for table `pres_votes`
--

CREATE TABLE `pres_votes` (
  `year` int(11) DEFAULT NULL,
  `state_name` varchar(50) DEFAULT NULL,
  `state_abbr` varchar(2) DEFAULT NULL,
  `candidate_name` varchar(50) DEFAULT NULL,
  `candidate_party` varchar(50) DEFAULT NULL,
  `votes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pres_votes`
--

INSERT INTO `pres_votes` (`year`, `state_name`, `state_abbr`, `candidate_name`, `candidate_party`, `votes`) VALUES
(2024, 'Alabama', 'AL', 'Donald Trump', 'Republican', 1457704),
(2024, 'Alaska', 'AK', 'Donald Trump', 'Republican', 141850),
(2024, 'Arizona', 'AZ', 'Donald Trump', 'Republican', 1649767),
(2024, 'Arkansas', 'AR', 'Donald Trump', 'Republican', 758007),
(2024, 'California', 'CA', 'Donald Trump', 'Republican', 4792460),
(2024, 'Colorado', 'CO', 'Donald Trump', 'Republican', 1341833),
(2024, 'Connecticut', 'CT', 'Donald Trump', 'Republican', 731832),
(2024, 'Delaware', 'DE', 'Donald Trump', 'Republican', 214184),
(2024, 'District of Columbia', 'DC', 'Donald Trump', 'Republican', 19402),
(2024, 'Florida', 'FL', 'Donald Trump', 'Republican', 6108452),
(2024, 'Georgia', 'GA', 'Donald Trump', 'Republican', 2660945),
(2024, 'Hawaii', 'HI', 'Donald Trump', 'Republican', 193169),
(2024, 'Idaho', 'ID', 'Donald Trump', 'Republican', 605144),
(2024, 'Illinois', 'IL', 'Donald Trump', 'Republican', 2403624),
(2024, 'Indiana', 'IN', 'Donald Trump', 'Republican', 1715058),
(2024, 'Iowa', 'IA', 'Donald Trump', 'Republican', 926103),
(2024, 'Kansas', 'KS', 'Donald Trump', 'Republican', 741459),
(2024, 'Kentucky', 'KY', 'Donald Trump', 'Republican', 1336227),
(2024, 'Louisiana', 'LA', 'Donald Trump', 'Republican', 1208269),
(2024, 'Maine', 'ME', 'Donald Trump', 'Republican', 363771),
(2024, 'Maryland', 'MD', 'Donald Trump', 'Republican', 971078),
(2024, 'Massachusetts', 'MA', 'Donald Trump', 'Republican', 1238649),
(2024, 'Michigan', 'MI', 'Donald Trump', 'Republican', 2809330),
(2024, 'Minnesota', 'MN', 'Donald Trump', 'Republican', 1519020),
(2024, 'Mississippi', 'MS', 'Donald Trump', 'Republican', 694920),
(2024, 'Missouri', 'MO', 'Donald Trump', 'Republican', 1739041),
(2024, 'Montana', 'MT', 'Donald Trump', 'Republican', 343049),
(2024, 'Nebraska', 'NE', 'Donald Trump', 'Republican', 557148),
(2024, 'Nevada', 'NV', 'Donald Trump', 'Republican', 729822),
(2024, 'New Hampshire', 'NH', 'Donald Trump', 'Republican', 395397),
(2024, 'New Jersey', 'NJ', 'Donald Trump', 'Republican', 1906769),
(2024, 'New Mexico', 'NM', 'Donald Trump', 'Republican', 422184),
(2024, 'New York', 'NY', 'Donald Trump', 'Republican', 3439362),
(2024, 'North Carolina', 'NC', 'Donald Trump', 'Republican', 2878071),
(2024, 'North Dakota', 'ND', 'Donald Trump', 'Republican', 246019),
(2024, 'Ohio', 'OH', 'Donald Trump', 'Republican', 3116579),
(2024, 'Oklahoma', 'OK', 'Donald Trump', 'Republican', 1036213),
(2024, 'Oregon', 'OR', 'Donald Trump', 'Republican', 861020),
(2024, 'Pennsylvania', 'PA', 'Donald Trump', 'Republican', 3511865),
(2024, 'Rhode Island', 'RI', 'Donald Trump', 'Republican', 212990),
(2024, 'South Carolina', 'SC', 'Donald Trump', 'Republican', 1483612),
(2024, 'South Dakota', 'SD', 'Donald Trump', 'Republican', 272081),
(2024, 'Tennessee', 'TN', 'Donald Trump', 'Republican', 1964499),
(2024, 'Texas', 'TX', 'Donald Trump', 'Republican', 6375318),
(2024, 'Utah', 'UT', 'Donald Trump', 'Republican', 784298),
(2024, 'Vermont', 'VT', 'Donald Trump', 'Republican', 119389),
(2024, 'Virginia', 'VA', 'Donald Trump', 'Republican', 2020582),
(2024, 'Washington', 'WA', 'Donald Trump', 'Republican', 1393054),
(2024, 'West Virginia', 'WV', 'Donald Trump', 'Republican', 527644),
(2024, 'Wisconsin', 'WI', 'Donald Trump', 'Republican', 1697769),
(2024, 'Wyoming', 'WY', 'Donald Trump', 'Republican', 192576),
(2024, 'Alabama', 'AL', 'Kamala Harris', 'Democrat', 769391),
(2024, 'Alaska', 'AK', 'Kamala Harris', 'Democrat', 103146),
(2024, 'Arizona', 'AZ', 'Kamala Harris', 'Democrat', 1469152),
(2024, 'Arkansas', 'AR', 'Kamala Harris', 'Democrat', 395756),
(2024, 'California', 'CA', 'Kamala Harris', 'Democrat', 7267019),
(2024, 'Colorado', 'CO', 'Kamala Harris', 'Democrat', 1686157),
(2024, 'Connecticut', 'CT', 'Kamala Harris', 'Democrat', 989195),
(2024, 'Delaware', 'DE', 'Kamala Harris', 'Democrat', 289585),
(2024, 'District of Columbia', 'DC', 'Kamala Harris', 'Democrat', 268992),
(2024, 'Florida', 'FL', 'Kamala Harris', 'Democrat', 4679984),
(2024, 'Georgia', 'GA', 'Kamala Harris', 'Democrat', 2544134),
(2024, 'Hawaii', 'HI', 'Kamala Harris', 'Democrat', 312384),
(2024, 'Idaho', 'ID', 'Kamala Harris', 'Democrat', 274956),
(2024, 'Illinois', 'IL', 'Kamala Harris', 'Democrat', 2891669),
(2024, 'Indiana', 'IN', 'Kamala Harris', 'Democrat', 1159785),
(2024, 'Iowa', 'IA', 'Kamala Harris', 'Democrat', 706526),
(2024, 'Kansas', 'KS', 'Kamala Harris', 'Democrat', 531988),
(2024, 'Kentucky', 'KY', 'Kamala Harris', 'Democrat', 700920),
(2024, 'Louisiana', 'LA', 'Kamala Harris', 'Democrat', 766424),
(2024, 'Maine', 'ME', 'Kamala Harris', 'Democrat', 423183),
(2024, 'Maryland', 'MD', 'Kamala Harris', 'Democrat', 1663496),
(2024, 'Massachusetts', 'MA', 'Kamala Harris', 'Democrat', 2074200),
(2024, 'Michigan', 'MI', 'Kamala Harris', 'Democrat', 2731316),
(2024, 'Minnesota', 'MN', 'Kamala Harris', 'Democrat', 1657005),
(2024, 'Mississippi', 'MS', 'Kamala Harris', 'Democrat', 423607),
(2024, 'Missouri', 'MO', 'Kamala Harris', 'Democrat', 1190820),
(2024, 'Montana', 'MT', 'Kamala Harris', 'Democrat', 225267),
(2024, 'Nebraska', 'NE', 'Kamala Harris', 'Democrat', 361949),
(2024, 'Nevada', 'NV', 'Kamala Harris', 'Democrat', 684051),
(2024, 'New Hampshire', 'NH', 'Kamala Harris', 'Democrat', 418351),
(2024, 'New Jersey', 'NJ', 'Kamala Harris', 'Democrat', 2126015),
(2024, 'New Mexico', 'NM', 'Kamala Harris', 'Democrat', 476088),
(2024, 'New York', 'NY', 'Kamala Harris', 'Democrat', 4348179),
(2024, 'North Carolina', 'NC', 'Kamala Harris', 'Democrat', 2688665),
(2024, 'North Dakota', 'ND', 'Kamala Harris', 'Democrat', 112019),
(2024, 'Ohio', 'OH', 'Kamala Harris', 'Democrat', 2476003),
(2024, 'Oklahoma', 'OK', 'Kamala Harris', 'Democrat', 499599),
(2024, 'Oregon', 'OR', 'Kamala Harris', 'Democrat', 1155481),
(2024, 'Pennsylvania', 'PA', 'Kamala Harris', 'Democrat', 3365311),
(2024, 'Rhode Island', 'RI', 'Kamala Harris', 'Democrat', 281375),
(2024, 'South Carolina', 'SC', 'Kamala Harris', 'Democrat', 1028532),
(2024, 'South Dakota', 'SD', 'Kamala Harris', 'Democrat', 146860),
(2024, 'Tennessee', 'TN', 'Kamala Harris', 'Democrat', 1055039),
(2024, 'Texas', 'TX', 'Kamala Harris', 'Democrat', 4806441),
(2024, 'Utah', 'UT', 'Kamala Harris', 'Democrat', 510070),
(2024, 'Vermont', 'VT', 'Kamala Harris', 'Democrat', 235791),
(2024, 'Virginia', 'VA', 'Kamala Harris', 'Democrat', 2264848),
(2024, 'Washington', 'WA', 'Kamala Harris', 'Democrat', 2066126),
(2024, 'West Virginia', 'WV', 'Kamala Harris', 'Democrat', 210223),
(2024, 'Wisconsin', 'WI', 'Kamala Harris', 'Democrat', 1668082),
(2024, 'Wyoming', 'WY', 'Kamala Harris', 'Democrat', 69508),
(2020, 'Alabama', 'AL', 'Joseph Biden', 'Democrat', 849624),
(2020, 'Alaska', 'AK', 'Joseph Biden', 'Democrat', 153778),
(2020, 'Arizona', 'AZ', 'Joseph Biden', 'Democrat', 1672143),
(2020, 'Arkansas', 'AR', 'Joseph Biden', 'Democrat', 423932),
(2020, 'California', 'CA', 'Joseph Biden', 'Democrat', 11110639),
(2020, 'Colorado', 'CO', 'Joseph Biden', 'Democrat', 1804352),
(2020, 'Connecticut', 'CT', 'Joseph Biden', 'Democrat', 1080831),
(2020, 'Delaware', 'DE', 'Joseph Biden', 'Democrat', 296268),
(2020, 'District of Columbia', 'DC', 'Joseph Biden', 'Democrat', 317323),
(2020, 'Florida', 'FL', 'Joseph Biden', 'Democrat', 5297045),
(2020, 'Georgia', 'GA', 'Joseph Biden', 'Democrat', 2473633),
(2020, 'Hawaii', 'HI', 'Joseph Biden', 'Democrat', 366130),
(2020, 'Idaho', 'ID', 'Joseph Biden', 'Democrat', 287021),
(2020, 'Illinois', 'IL', 'Joseph Biden', 'Democrat', 3471915),
(2020, 'Indiana', 'IN', 'Joseph Biden', 'Democrat', 1242498),
(2020, 'Iowa', 'IA', 'Joseph Biden', 'Democrat', 759061),
(2020, 'Kansas', 'KS', 'Joseph Biden', 'Democrat', 570323),
(2020, 'Kentucky', 'KY', 'Joseph Biden', 'Democrat', 772474),
(2020, 'Louisiana', 'LA', 'Joseph Biden', 'Democrat', 856034),
(2020, 'Maine', 'ME', 'Joseph Biden', 'Democrat', 435072),
(2020, 'Maryland', 'MD', 'Joseph Biden', 'Democrat', 1985023),
(2020, 'Massachusetts', 'MA', 'Joseph Biden', 'Democrat', 2382202),
(2020, 'Michigan', 'MI', 'Joseph Biden', 'Democrat', 2804040),
(2020, 'Minnesota', 'MN', 'Joseph Biden', 'Democrat', 1717077),
(2020, 'Mississippi', 'MS', 'Joseph Biden', 'Democrat', 539398),
(2020, 'Missouri', 'MO', 'Joseph Biden', 'Democrat', 1253014),
(2020, 'Montana', 'MT', 'Joseph Biden', 'Democrat', 244786),
(2020, 'Nebraska', 'NE', 'Joseph Biden', 'Democrat', 374583),
(2020, 'Nevada', 'NV', 'Joseph Biden', 'Democrat', 703486),
(2020, 'New Hampshire', 'NH', 'Joseph Biden', 'Democrat', 424937),
(2020, 'New Jersey', 'NJ', 'Joseph Biden', 'Democrat', 2608400),
(2020, 'New Mexico', 'NM', 'Joseph Biden', 'Democrat', 501614),
(2020, 'New York', 'NY', 'Joseph Biden', 'Democrat', 4858273),
(2020, 'North Carolina', 'NC', 'Joseph Biden', 'Democrat', 2684292),
(2020, 'North Dakota', 'ND', 'Joseph Biden', 'Democrat', 115042),
(2020, 'Ohio', 'OH', 'Joseph Biden', 'Democrat', 2679165),
(2020, 'Oklahoma', 'OK', 'Joseph Biden', 'Democrat', 503890),
(2020, 'Oregon', 'OR', 'Joseph Biden', 'Democrat', 1340383),
(2020, 'Pennsylvania', 'PA', 'Joseph Biden', 'Democrat', 3458229),
(2020, 'Rhode Island', 'RI', 'Joseph Biden', 'Democrat', 307486),
(2020, 'South Carolina', 'SC', 'Joseph Biden', 'Democrat', 1091541),
(2020, 'South Dakota', 'SD', 'Joseph Biden', 'Democrat', 150471),
(2020, 'Tennessee', 'TN', 'Joseph Biden', 'Democrat', 1143711),
(2020, 'Texas', 'TX', 'Joseph Biden', 'Democrat', 5259126),
(2020, 'Utah', 'UT', 'Joseph Biden', 'Democrat', 560282),
(2020, 'Vermont', 'VT', 'Joseph Biden', 'Democrat', 242820),
(2020, 'Virginia', 'VA', 'Joseph Biden', 'Democrat', 2413568),
(2020, 'Washington', 'WA', 'Joseph Biden', 'Democrat', 2369612),
(2020, 'West Virginia', 'WV', 'Joseph Biden', 'Democrat', 235984),
(2020, 'Wisconsin', 'WI', 'Joseph Biden', 'Democrat', 1630866),
(2020, 'Wyoming', 'WY', 'Joseph Biden', 'Democrat', 73491),
(2020, 'Alabama', 'AL', 'Donald Trump', 'Republican', 1441170),
(2020, 'Alaska', 'AK', 'Donald Trump', 'Republican', 189951),
(2020, 'Arizona', 'AZ', 'Donald Trump', 'Republican', 1661686),
(2020, 'Arkansas', 'AR', 'Donald Trump', 'Republican', 760647),
(2020, 'California', 'CA', 'Donald Trump', 'Republican', 6006518),
(2020, 'Colorado', 'CO', 'Donald Trump', 'Republican', 1364607),
(2020, 'Connecticut', 'CT', 'Donald Trump', 'Republican', 714717),
(2020, 'Delaware', 'DE', 'Donald Trump', 'Republican', 200603),
(2020, 'District of Columbia', 'DC', 'Donald Trump', 'Republican', 18586),
(2020, 'Florida', 'FL', 'Donald Trump', 'Republican', 5668731),
(2020, 'Georgia', 'GA', 'Donald Trump', 'Republican', 2461854),
(2020, 'Hawaii', 'HI', 'Donald Trump', 'Republican', 196864),
(2020, 'Idaho', 'ID', 'Donald Trump', 'Republican', 554119),
(2020, 'Illinois', 'IL', 'Donald Trump', 'Republican', 2446891),
(2020, 'Indiana', 'IN', 'Donald Trump', 'Republican', 1729857),
(2020, 'Iowa', 'IA', 'Donald Trump', 'Republican', 897672),
(2020, 'Kansas', 'KS', 'Donald Trump', 'Republican', 771406),
(2020, 'Kentucky', 'KY', 'Donald Trump', 'Republican', 1326646),
(2020, 'Louisiana', 'LA', 'Donald Trump', 'Republican', 1255776),
(2020, 'Maine', 'ME', 'Donald Trump', 'Republican', 360737),
(2020, 'Maryland', 'MD', 'Donald Trump', 'Republican', 976414),
(2020, 'Massachusetts', 'MA', 'Donald Trump', 'Republican', 1167202),
(2020, 'Michigan', 'MI', 'Donald Trump', 'Republican', 2649852),
(2020, 'Minnesota', 'MN', 'Donald Trump', 'Republican', 1484065),
(2020, 'Mississippi', 'MS', 'Donald Trump', 'Republican', 756764),
(2020, 'Missouri', 'MO', 'Donald Trump', 'Republican', 1718736),
(2020, 'Montana', 'MT', 'Donald Trump', 'Republican', 343602),
(2020, 'Nebraska', 'NE', 'Donald Trump', 'Republican', 556846),
(2020, 'Nevada', 'NV', 'Donald Trump', 'Republican', 669890),
(2020, 'New Hampshire', 'NH', 'Donald Trump', 'Republican', 365660),
(2020, 'New Jersey', 'NJ', 'Donald Trump', 'Republican', 1883313),
(2020, 'New Mexico', 'NM', 'Donald Trump', 'Republican', 401894),
(2020, 'New York', 'NY', 'Donald Trump', 'Republican', 2955662),
(2020, 'North Carolina', 'NC', 'Donald Trump', 'Republican', 2758775),
(2020, 'North Dakota', 'ND', 'Donald Trump', 'Republican', 235751),
(2020, 'Ohio', 'OH', 'Donald Trump', 'Republican', 3154834),
(2020, 'Oklahoma', 'OK', 'Donald Trump', 'Republican', 1020280),
(2020, 'Oregon', 'OR', 'Donald Trump', 'Republican', 958448),
(2020, 'Pennsylvania', 'PA', 'Donald Trump', 'Republican', 3377674),
(2020, 'Rhode Island', 'RI', 'Donald Trump', 'Republican', 199922),
(2020, 'South Carolina', 'SC', 'Donald Trump', 'Republican', 1385103),
(2020, 'South Dakota', 'SD', 'Donald Trump', 'Republican', 261043),
(2020, 'Tennessee', 'TN', 'Donald Trump', 'Republican', 1852475),
(2020, 'Texas', 'TX', 'Donald Trump', 'Republican', 5890347),
(2020, 'Utah', 'UT', 'Donald Trump', 'Republican', 865140),
(2020, 'Vermont', 'VT', 'Donald Trump', 'Republican', 112704),
(2020, 'Virginia', 'VA', 'Donald Trump', 'Republican', 1962430),
(2020, 'Washington', 'WA', 'Donald Trump', 'Republican', 1584651),
(2020, 'West Virginia', 'WV', 'Donald Trump', 'Republican', 545382),
(2020, 'Wisconsin', 'WI', 'Donald Trump', 'Republican', 1610184),
(2020, 'Wyoming', 'WY', 'Donald Trump', 'Republican', 193559);

-- --------------------------------------------------------

--
-- Table structure for table `states`
--

CREATE TABLE `states` (
  `name` varchar(50) DEFAULT NULL,
  `abbr` varchar(50) DEFAULT NULL,
  `capital` varchar(50) DEFAULT NULL,
  `region` varchar(50) DEFAULT NULL,
  `ev` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `states`
--

INSERT INTO `states` (`name`, `abbr`, `capital`, `region`, `ev`) VALUES
('Alabama', 'AL', 'Montgomery', 'South', 9),
('Alaska', 'AK', 'Juneau', 'West', 3),
('Arizona', 'AZ', 'Phoenix', 'West', 11),
('Arkansas', 'AR', 'Little Rock', 'South', 6),
('California', 'CA', 'Sacramento', 'West', 54),
('Colorado', 'CO', 'Denver', 'West', 10),
('Connecticut', 'CT', 'Hartford', 'Northeast', 7),
('Delaware', 'DE', 'Dover', 'Northeast', 3),
('District of Columbia', 'DC', 'Washington', 'Northeast', 3),
('Florida', 'FL', 'Tallahassee', 'South', 30),
('Georgia', 'GA', 'Atlanta', 'South', 16),
('Hawaii', 'HI', 'Honolulu', 'West', 4),
('Idaho', 'ID', 'Boise', 'West', 4),
('Illinois', 'IL', 'Springfield', 'Midwest', 19),
('Indiana', 'IN', 'Indianapolis', 'Midwest', 11),
('Iowa', 'IA', 'Des Moines', 'Midwest', 6),
('Kansas', 'KS', 'Topeka', 'Midwest', 6),
('Kentucky', 'KY', 'Frankfort', 'South', 8),
('Louisiana', 'LA', 'Baton Rouge', 'South', 8),
('Maine', 'ME', 'Augusta', 'Northeast', 4),
('Maryland', 'MD', 'Annapolis', 'Northeast', 10),
('Massachusetts', 'MA', 'Boston', 'Northeast', 11),
('Michigan', 'MI', 'Lansing', 'Midwest', 15),
('Minnesota', 'MN', 'St. Paul', 'Midwest', 10),
('Mississippi', 'MS', 'Jackson', 'South', 6),
('Missouri', 'MO', 'Jefferson City', 'Midwest', 10),
('Montana', 'MT', 'Helena', 'West', 4),
('Nebraska', 'NE', 'Lincoln', 'Midwest', 5),
('Nevada', 'NV', 'Carson City', 'West', 6),
('New Hampshire', 'NH', 'Concord', 'Northeast', 4),
('New Jersey', 'NJ', 'Trenton', 'Northeast', 14),
('New Mexico', 'NM', 'Santa Fe', 'West', 5),
('New York', 'NY', 'Albany', 'Northeast', 28),
('North Carolina', 'NC', 'Raleigh', 'South', 16),
('North Dakota', 'ND', 'Bismarck', 'Midwest', 3),
('Ohio', 'OH', 'Columbus', 'Midwest', 17),
('Oklahoma', 'OK', 'Oklahoma City', 'South', 7),
('Oregon', 'OR', 'Salem', 'West', 8),
('Pennsylvania', 'PA', 'Harrisburg', 'Northeast', 19),
('Rhode Island', 'RI', 'Providence', 'Northeast', 4),
('South Carolina', 'SC', 'Columbia', 'South', 9),
('South Dakota', 'SD', 'Pierre', 'Midwest', 3),
('Tennessee', 'TN', 'Nashville', 'South', 11),
('Texas', 'TX', 'Austin', 'South', 40),
('Utah', 'UT', 'Salt Lake City', 'West', 6),
('Vermont', 'VT', 'Montpelier', 'Northeast', 3),
('Virginia', 'VA', 'Richmond', 'South', 13),
('Washington', 'WA', 'Olympia', 'West', 12),
('West Virginia', 'WV', 'Charleston', 'South', 4),
('Wisconsin', 'WI', 'Madison', 'Midwest', 10),
('Wyoming', 'WY', 'Cheyenne', 'West', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`) VALUES
('thomas.devine@atu.ie', 'letmein');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
