// CREATE TABLE `genetic`.`initDNA` ( `ID` INT NOT NULL AUTO_INCREMENT , `a0` INT NOT NULL, `a1` INT NOT NULL, `a2` INT NOT NULL, `a3` INT NOT NULL, `a4` INT NOT NULL, `a5` INT NOT NULL, `a6` INT NOT NULL, `a7` INT NOT NULL, `a8` INT NOT NULL, `a9` INT NOT NULL, `a10` INT NOT NULL, `a11` INT NOT NULL, `a12` INT NOT NULL, `a13` INT NOT NULL, `a14` INT NOT NULL, `a15` INT NOT NULL, `a16` INT NOT NULL, `a17` INT NOT NULL, `a18` INT NOT NULL, `a19` INT NOT NULL, `a20` INT NOT NULL, `a21` INT NOT NULL, `a22` INT NOT NULL, `a23` INT NOT NULL, `a24` INT NOT NULL, `a25` INT NOT NULL, `a26` INT NOT NULL, `a27` INT NOT NULL, `a28` INT NOT NULL, `a29` INT NOT NULL, `a30` FLOAT NOT NULL, `a31` FLOAT NOT NULL, `a32` FLOAT NOT NULL, `a33` FLOAT NOT NULL, `b0` INT NOT NULL, `b1` INT NOT NULL, `b2` INT NOT NULL, `b3` INT NOT NULL, `b4` INT NOT NULL, `b5` INT NOT NULL, `b6` INT NOT NULL, `b7` INT NOT NULL, `b8` INT NOT NULL, `b9` INT NOT NULL, `b10` INT NOT NULL, `b11` INT NOT NULL, `b12` INT NOT NULL, `b13` INT NOT NULL, `b14` INT NOT NULL, `b15` INT NOT NULL, `b16` INT NOT NULL, `b17` INT NOT NULL, `b18` INT NOT NULL, `b19` INT NOT NULL, `b20` INT NOT NULL, `b21` INT NOT NULL, `b22` INT NOT NULL, `b23` INT NOT NULL, `b24` INT NOT NULL, `b25` INT NOT NULL, `b26` INT NOT NULL, `b27` INT NOT NULL, `b28` INT NOT NULL, `b29` INT NOT NULL, `b30` INT NOT NULL, `b31` INT NOT NULL, `b32` INT NOT NULL, `b33` INT NOT NULL, `b34` INT NOT NULL, PRIMARY KEY (`ID`)) ENGINE = InnoDB;




function lel (str) {
	return `"a${str}" INT NOT NULL`
}




for (var i = 0; i < 31; i++) {
	console.log(lel(i));
}



`a0` INT NOT NULL, `a1` INT NOT NULL, `a2` INT NOT NULL, `a3` INT NOT NULL, `a4` INT NOT NULL, `a5` INT NOT NULL, `a6` INT NOT NULL, `a7` INT NOT NULL, `a8` INT NOT NULL, `a9` INT NOT NULL, `a10` INT NOT NULL, `a11` INT NOT NULL, `a12` INT NOT NULL, `a13` INT NOT NULL, `a14` INT NOT NULL, `a15` INT NOT NULL, `a16` INT NOT NULL, `a17` INT NOT NULL, `a18` INT NOT NULL, `a19` INT NOT NULL, `a20` INT NOT NULL, `a21` INT NOT NULL, `a22` INT NOT NULL, `a23` INT NOT NULL, `a24` INT NOT NULL, `a25` INT NOT NULL, `a26` INT NOT NULL, `a27` INT NOT NULL, `a28` INT NOT NULL, `a29` INT NOT NULL, `a30` FLOAT NOT NULL, `a31` FLOAT NOT NULL, `a32` FLOAT NOT NULL, `a33` FLOAT NOT NULL







-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 27, 2017 at 03:53 AM
-- Server version: 5.6.35
-- PHP Version: 7.0.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `genetic`
--

-- --------------------------------------------------------

--
-- Table structure for table `initDNA`
--

CREATE TABLE `initDNA` (
  `ID` int(11) NOT NULL,
  `a0` int(11) NOT NULL,
  `a1` int(11) NOT NULL,
  `a2` int(11) NOT NULL,
  `a3` int(11) NOT NULL,
  `a4` int(11) NOT NULL,
  `a5` int(11) NOT NULL,
  `a6` int(11) NOT NULL,
  `a7` int(11) NOT NULL,
  `a8` int(11) NOT NULL,
  `a9` int(11) NOT NULL,
  `a10` int(11) NOT NULL,
  `a11` int(11) NOT NULL,
  `a12` int(11) NOT NULL,
  `a13` int(11) NOT NULL,
  `a14` int(11) NOT NULL,
  `a15` int(11) NOT NULL,
  `a16` int(11) NOT NULL,
  `a17` int(11) NOT NULL,
  `a18` int(11) NOT NULL,
  `a19` int(11) NOT NULL,
  `a20` int(11) NOT NULL,
  `a21` int(11) NOT NULL,
  `a22` int(11) NOT NULL,
  `a23` int(11) NOT NULL,
  `a24` int(11) NOT NULL,
  `a25` int(11) NOT NULL,
  `a26` int(11) NOT NULL,
  `a27` int(11) NOT NULL,
  `a28` int(11) NOT NULL,
  `a29` int(11) NOT NULL,
  `a30` float NOT NULL,
  `a31` float NOT NULL,
  `a32` float NOT NULL,
  `a33` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `initDNA`
--
ALTER TABLE `initDNA`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `initDNA`
--
ALTER TABLE `initDNA`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;