-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2015 at 11:00 PM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `h3at_crack`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `account_status` varchar(20) NOT NULL,
  `token` varchar(100) NOT NULL,
  `referral` varchar(100) NOT NULL,
  `about_me` text NOT NULL,
  `address` text NOT NULL,
  `phone` varchar(100) NOT NULL,
  `referer` int(11) DEFAULT NULL,
  `user_type` varchar(50) NOT NULL,
  `create_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `account_status`, `token`, `referral`, `about_me`, `address`, `phone`, `referer`, `user_type`, `create_date`, `update_date`) VALUES
(2, 'Fahad', 'Billah', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'hbMr3vB88XncJp5fybclP9G7gD1E6t9w22zQj9fc', 'C9DHcTHU', '', 'Badda Dhaka', '01966662623', NULL, 'user', '2015-02-11 21:40:03', '0000-00-00 00:00:00'),
(3, 'asdf', 'asfd', 'sawontheboss4@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'nSEiMgzieo1O4K67aipTQu2mWizgOc7NibgHKF6a', 'ZFdVoDJc', '', 'asdf', 'asdf', NULL, 'user', '2015-02-11 21:44:27', '0000-00-00 00:00:00'),
(4, 'asdf', 'asfd', 'aaronnabi@ymail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'EqQBN9BzlXOJhpco2DYqCcQatc3tAfiFpqOAUkjC', 'z20ymbCM', '', 'asddf', 'asdf', NULL, 'user', '2015-02-11 21:45:07', '0000-00-00 00:00:00'),
(5, 'asdf', 'asdf', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'KJVWvugnbvdk0EInGgeCqaLEYILzxLbWPDwU4bJ1', 'ZLhoMc8B', '', 'asdf', 'asdf', NULL, 'user', '2015-02-11 21:50:43', '0000-00-00 00:00:00'),
(6, 'asdf', 'asdf', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'cRMMqyatdELOKZymMV0fvg41EodPr8rdAPbiikrF', 'jYEqQBN9', '', 'asdf', 'asdf', NULL, 'user', '2015-02-11 21:51:07', '0000-00-00 00:00:00'),
(7, 'asdf', 'asf', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'oKAXyoc6UghQUr40xyhWgE8u2ml0lL7j9rcLVvMd', 'EyB0LFSX', '', 'asdf', 'asdf', NULL, 'user', '2015-02-11 21:51:49', '0000-00-00 00:00:00'),
(8, 'asdf', 'asdf', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'BzlXOJhpco2DYqCcQatc3tAfiFpqOAUkjCz20ymb', 'CMJOn6Fy', '', 'asdf', 'asdf', NULL, 'user', '2015-02-11 21:52:19', '0000-00-00 00:00:00'),
(9, 'asdf', 'asdf', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'ZTDtGZBcaJ2NEXURT1Fv4LjjUwjnE9Bh0ZG8aSvw', 'TaxxnHLM', '', 'asdf', 'asdf', NULL, 'user', '2015-02-11 21:52:39', '0000-00-00 00:00:00'),
(10, 'asdf', 'asdf', 'fahadbillah@yahoo.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'not_activated_yet', 'frkrzXaiIQ6Q8amXOwGXb0fIgdOxufziPHfkLE4t', 'gHK4NWuY', '', 'asf', 'safd', NULL, 'user', '2015-02-11 21:59:05', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
