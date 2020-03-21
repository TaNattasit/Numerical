-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: database
-- Generation Time: Mar 21, 2020 at 07:26 AM
-- Server version: 5.7.29
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `numerical`
--

-- --------------------------------------------------------

--
-- Table structure for table `equation`
--

CREATE TABLE `equation` (
  `EQ_NO` int(11) NOT NULL,
  `EQ_Name` text COLLATE utf8_bin NOT NULL,
  `EQ_Type` text COLLATE utf8_bin NOT NULL,
  `EQ_Diff` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `equation`
--

INSERT INTO `equation` (`EQ_NO`, `EQ_Name`, `EQ_Type`, `EQ_Diff`) VALUES
(1, '(x^2)-(3*x)+3', 'Bisection', ''),
(2, '(x^10)-1', 'Bisection', ''),
(3, '(e^(-x))-(x/4)', 'Bisection', ''),
(4, '(x^2)-(3*x)+3', 'FalsePosition', ''),
(5, '(x^10)-1', 'FalsePosition', ''),
(6, '(e^(-x))-(x/4)', 'FalsePosition', ''),
(7, '(x^2)-(3*x)+3', 'OnePoint', ''),
(8, '(x^10)-1', 'OnePoint', ''),
(9, '(e^(-x))-(x/4)', 'OnePoint', ''),
(10, '(x^2)-(3*x)+3', 'NewtonRaphson', '(2*x)-3'),
(11, '(x^10)-1', 'NewtonRaphson', '10*x'),
(12, '(e^(-x))-(x/4)', 'NewtonRaphson', '(-e^(-x))-(1/4)'),
(13, '(x^2)-(3*x)+3', 'Secant', ''),
(14, '(x^10)-1', 'Secant', ''),
(15, '(e^(-x))-(x/4)', 'Secant', ''),
(16, '(x^4)-13', 'Bisection', ''),
(17, '(x^4)-13', 'FalsePosition', ''),
(18, '(x^2)-14', 'Bisection', ''),
(19, '(43*(x^2))-(2*x)+(1/43)', 'FalsePosition', ''),
(20, '(43*x)-1', 'FalsePosition', ''),
(21, '(1/x)-43', 'FalsePosition', ''),
(22, '(x^3)+2', 'Bisection', ''),
(23, '(x^2)-14', 'FalsePosition', ''),
(24, 'x+10', 'Bisection', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `equation`
--
ALTER TABLE `equation`
  ADD PRIMARY KEY (`EQ_NO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `equation`
--
ALTER TABLE `equation`
  MODIFY `EQ_NO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
