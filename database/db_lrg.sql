-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 30, 2021 at 04:59 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

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

DROP TABLE IF EXISTS `tbl_class`;
CREATE TABLE IF NOT EXISTS `tbl_class` (
  `class_id` int(11) NOT NULL AUTO_INCREMENT,
  `class_topic` varchar(250) NOT NULL,
  `class_length` varchar(25) NOT NULL,
  `class_description` varchar(500) NOT NULL,
  `class_video` varchar(30) NOT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

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

DROP TABLE IF EXISTS `tbl_task`;
CREATE TABLE IF NOT EXISTS `tbl_task` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `task_date_week` varchar(11) NOT NULL,
  `task_date` varchar(25) NOT NULL,
  `task_time` varchar(20) NOT NULL,
  `task_type` varchar(25) NOT NULL,
  `task_location` varchar(100) NOT NULL,
  `task_fee` varchar(10) NOT NULL,
  `task_officials` varchar(20) NOT NULL,
  PRIMARY KEY (`task_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

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

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(20) NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_lname` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_gender` varchar(24) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_pass`, `user_fname`, `user_lname`, `user_email`, `user_gender`) VALUES
(1, 'spiderman', 'marvel', 'Peter', 'Parker', 'spiderpp@gmail.com', '0'),
(2, 'batman', 'dc', 'Bruce', 'Wayne', 'batmanbw@yahoo.com', '0'),
(3, 'harley', 'joker', 'Harley', 'Quinn', 'harleyq@gmail.com', '1'),
(4, 'deadpool', 'vanessa', 'Wade', 'Wilson', 'dp@gmail.com', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
