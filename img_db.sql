-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2022 at 01:46 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `img_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(2, 'Kawasaki Estrella 250', '57fa12b19f7037531261da2da323296c.jpg', 'http://localhost:5000/img/57fa12b19f7037531261da2da323296c.jpg', '2022-05-28 02:34:16', '2022-06-08 10:16:58'),
(3, 'Yamaha XS650', '003ac5df077e8f016acb0fb2ef6d2d2b.jpeg', 'http://localhost:5000/img/003ac5df077e8f016acb0fb2ef6d2d2b.jpeg', '2022-05-28 02:34:45', '2022-05-28 02:54:32'),
(4, 'Triumph 250', '06e5c3a124775a64804abfb7cad6d51a.jpg', 'http://localhost:5000/img/06e5c3a124775a64804abfb7cad6d51a.jpg', '2022-05-28 04:50:50', '2022-05-28 04:50:50'),
(5, 'CB 400', '3299432a6bbcff4b7f85847e177415c3.jpg', 'http://localhost:5000/img/3299432a6bbcff4b7f85847e177415c3.jpg', '2022-05-28 04:58:50', '2022-05-28 04:58:50'),
(6, 'Royal Enfield 350', 'b41178e300d6f6b195a40193d7160e72.jpg', 'http://localhost:5000/img/b41178e300d6f6b195a40193d7160e72.jpg', '2022-05-28 05:04:46', '2022-05-28 05:04:46'),
(7, 'Norton', '8a9bb9dc3fd615b90a5fd10b72525b3a.jpg', 'http://localhost:5000/img/8a9bb9dc3fd615b90a5fd10b72525b3a.jpg', '2022-06-08 10:16:23', '2022-06-08 10:16:23'),
(8, 'Toyota Supra', '2a854ab523d74f7f6ea8c6d097291669.jpg', 'http://localhost:5000/img/2a854ab523d74f7f6ea8c6d097291669.jpg', '2022-06-08 10:21:39', '2022-06-08 10:21:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
