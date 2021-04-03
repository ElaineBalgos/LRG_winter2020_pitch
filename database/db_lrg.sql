-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Apr 02, 2021 at 05:20 PM
-- Server version: 10.3.27-MariaDB-1:10.3.27+maria~focal
-- PHP Version: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_lrg`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_class`
--

CREATE TABLE `tbl_class` (
  `class_id` int(11) NOT NULL,
  `class_topic` varchar(250) NOT NULL,
  `class_length` varchar(25) NOT NULL,
  `class_description` varchar(500) NOT NULL,
  `class_video` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_class`
--

INSERT INTO `tbl_class` (`class_id`, `class_topic`, `class_length`, `class_description`, `class_video`) VALUES
(1, 'Intro to Referees', '6 min', 'Referees are crucial to the hockey game, ensuring that the game is skilled.', 'intro-to-referees.mp4'),
(2, 'Hockey Rules', '3 min', 'Once you understand a few basic rules and coventions, it\'s easy to follow one of the world\'s greatest and most exciting games.', 'hockey-rules.mp4'),
(3, 'Referees Signals\r\n', '3 min', 'You will become an excellent referee when you are proficient in these actions.', 'referees-signals.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_task`
--

CREATE TABLE `tbl_task` (
  `task_id` int(11) NOT NULL,
  `task_date_week` varchar(11) NOT NULL,
  `task_date` varchar(25) NOT NULL,
  `task_time` varchar(20) NOT NULL,
  `task_type` varchar(25) NOT NULL,
  `task_location` varchar(100) NOT NULL,
  `task_fee` varchar(10) NOT NULL,
  `task_officials` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_task`
--

INSERT INTO `tbl_task` (`task_id`, `task_date_week`, `task_date`, `task_time`, `task_type`, `task_location`, `task_fee`, `task_officials`) VALUES
(1, 'TUESDAY', '03/14/2021', '7:00 pm', '(NCA) A Division', 'Allied Veterans Arena', '$50.00', 'C. Wheeler'),
(2, 'WEDNESDAY', '05/01/2021', '2:00 pm', '(NCA) A Division', 'Allied Veterans Arena', '$150.00', 'A. Deep'),
(3, 'TUESDAY', '06/02/2021', '10:00 am', '(NCA) A Division', 'Don McLaren Arena', '$80.00', 'B. Doe'),
(4, 'FRIDAY', '06/02/2022', '6:00 pm', '(NCA) A Division', 'Scotiabank Arena', '$50.00', 'C. Smith');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(20) NOT NULL,
  `user_fname` varchar(20) NOT NULL,
  `user_lname` varchar(20) NOT NULL,
  `user_email` varchar(30) NOT NULL,
  `user_gender` varchar(5) NOT NULL DEFAULT '0',
  `user_level` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_pass`, `user_fname`, `user_lname`, `user_email`, `user_gender`, `user_level`) VALUES
(1, 'shield1', 'shield1', 'Nick', 'Fury', 'nn@hotmail.com', '0', 1),
(2, 'sheild2', 'sheild2', 'Peggy', 'Carter', 'pc@hotmail.com', '1', 1),
(3, 'gotham', 'gotham', 'Alfred', 'Pennyworth', 'ap@bat.com', '1', 1),
(4, 'deadpool', 'vanessa', 'Wade', 'Wilson', 'dp@gmail.com', '0', 0),
(5, 'spiderman', 'marvel', 'Peter', 'Parker', 'spiderpp@gmail.com', '0', 0),
(6, 'batman', 'dc', 'Bruce', 'Wayne', 'batmanbw@yahoo.com', '0', 0),
(7, 'harley', 'joker', 'Harley', 'Quinn', 'harleyq@gmail.com', '1', 0),
(8, 'test', 'test', 'test', 'test', 'test@gmail.com', '2', 0),
(9, 'superman', 'superman', 'Clark', 'Kent', 'ck@super.com', '0', 0),
(10, 'incredible', 'incredible', 'Robert', 'Parr', 'robertbobparr@yahoo.com', '1', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_class`
--
ALTER TABLE `tbl_class`
  ADD PRIMARY KEY (`class_id`);

--
-- Indexes for table `tbl_task`
--
ALTER TABLE `tbl_task`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_class`
--
ALTER TABLE `tbl_class`
  MODIFY `class_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_task`
--
ALTER TABLE `tbl_task`
  MODIFY `task_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
