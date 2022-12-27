-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 10, 2021 at 07:19 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Spectrum_ClothingStore`
--

-- --------------------------------------------------------

--
-- Table structure for table `Clothes`
--

CREATE TABLE `Clothes` (
  `ID` int(11) NOT NULL,
  `Name` varchar(32) NOT NULL,
  `SRC` text NOT NULL,
  `ClothesType` varchar(32) NOT NULL,
  `Color` varchar(32) NOT NULL,
  `Price` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Clothes`
--

INSERT INTO `Clothes` (`ID`, `Name`, `SRC`, `ClothesType`, `Color`, `Price`) VALUES
(1, 'Nike Therma', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b88d694b-8417-4973-bc31-cfd78421093e/therma-mens-pullover-training-hoodie-zTst4l.png', 'Sweatshirt', 'Black', '50.00'),
(2, 'Nike Dri-FIT', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/56c6b7b4-e0fd-4fb3-86aa-9880926ec444/dri-fit-mens-training-pants-41n6G2.png', 'Sweatpants', 'Black', '55.00'),
(3, 'Nike Dri-FIT Icon', 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/920cd055-f87a-426b-9b93-1b26370f00e4/dri-fit-icon-mens-basketball-shorts-2c8F76.png', 'Basketball Shorts', 'Black', '30.00');

-- --------------------------------------------------------

--
-- Table structure for table `Purchases`
--

CREATE TABLE `Purchases` (
  `ID` int(11) NOT NULL,
  `FirstName` varchar(32) NOT NULL,
  `LastName` varchar(32) NOT NULL,
  `Street` varchar(64) NOT NULL,
  `City` varchar(32) NOT NULL,
  `State` varchar(2) NOT NULL,
  `ZipCode` varchar(5) NOT NULL,
  `ClothesID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Purchases`
--

INSERT INTO `Purchases` (`ID`, `FirstName`, `LastName`, `Street`, `City`, `State`, `ZipCode`, `ClothesID`) VALUES
(1, 'Charles', 'Barkley', '244 Armstrong Street', 'Brick', 'NJ', '08723', 1),
(2, 'CJ', 'Conti', '12 Camp Bal Place', 'Little Falls', 'NJ', '07424', 2),
(3, 'Meme', 'Nightcore Lady', '1273 Rockerfeller Street', 'New York', 'NY', '10001', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Clothes`
--
ALTER TABLE `Clothes`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `Purchases`
--
ALTER TABLE `Purchases`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Clothes`
--
ALTER TABLE `Clothes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Purchases`
--
ALTER TABLE `Purchases`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
