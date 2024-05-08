-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Трв 08 2024 р., 14:30
-- Версія сервера: 5.7.14
-- Версія PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `database_web`
--

-- --------------------------------------------------------

--
-- Структура таблиці `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `articules` int(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблиці `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Дамп даних таблиці `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Galvanic Elements'),
(3, 'Electronic Components'),
(2, 'Governance of Galvanic System'),
(4, 'Clutch'),
(5, 'Transmission Parts'),
(6, 'Suspension'),
(7, 'Steering'),
(8, 'Belts, Straps, Tensioners'),
(9, 'Engine Details'),
(10, 'Exhaust System'),
(11, 'Filters'),
(12, 'Cooling'),
(13, 'Air Conditioning System'),
(14, 'Heating System'),
(15, 'Electrics'),
(16, 'Lighting'),
(17, 'Ignition'),
(18, 'Body and Components'),
(19, 'Trunk'),
(20, 'Hood and Components'),
(21, 'Doors and Components'),
(22, 'Front body panel'),
(23, 'Windshield System'),
(24, 'Glass');

-- --------------------------------------------------------

--
-- Структура таблиці `detail`
--

CREATE TABLE `detail` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `articul` int(30) NOT NULL,
  `brand` varchar(40) NOT NULL,
  `price` int(30) NOT NULL,
  `quantaty` int(30) NOT NULL,
  `car_brand` varchar(40) NOT NULL,
  `image` text NOT NULL,
  `id_sub-category` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблиці `help_messages`
--

CREATE TABLE `help_messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `help_text` varchar(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблиці `sub-categories`
--

CREATE TABLE `sub-categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Дамп даних таблиці `sub-categories`
--

INSERT INTO `sub-categories` (`id`, `name`, `id_category`) VALUES
(1, 'Galvanic coupling', 1),
(2, 'Galvanic drum', 1),
(3, 'Galvanic disc', 1),
(4, 'Galvanic support repair kit', 1),
(5, 'Galvanic hand brake cable', 1),
(6, 'Galvanic disc bolt', 2),
(7, 'Galvanic support mounting bolt', 2),
(8, 'Galvanic vacuum amplifier', 2),
(9, 'Galvanic seals and tubes', 2),
(10, 'Galvanic support', 2),
(11, 'Main galvanic cylinder', 2),
(12, 'Galvanic wear sensor', 2),
(13, 'Galvanic pad wear sensor', 3),
(14, 'ABS sensor', 3),
(15, 'Clutch bolt', 4);

-- --------------------------------------------------------

--
-- Структура таблиці `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `phone` int(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `cart` int(40) NOT NULL,
  `messages` varchar(120) NOT NULL,
  `token` varchar(120) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблиці `user_messages`
--

CREATE TABLE `user_messages` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `text` text NOT NULL,
  `status` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `detail`
--
ALTER TABLE `detail`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `help_messages`
--
ALTER TABLE `help_messages`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `sub-categories`
--
ALTER TABLE `sub-categories`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Індекси таблиці `user_messages`
--
ALTER TABLE `user_messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT для таблиці `detail`
--
ALTER TABLE `detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `help_messages`
--
ALTER TABLE `help_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `sub-categories`
--
ALTER TABLE `sub-categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT для таблиці `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблиці `user_messages`
--
ALTER TABLE `user_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
