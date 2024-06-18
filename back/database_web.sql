-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Трв 19 2024 р., 14:10
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
  `name` varchar(100) CHARACTER SET latin1 NOT NULL,
  `id_category` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(15, 'Clutch bolt', 4),
(16, 'Galvanic coupling', 1),
(17, 'Galvanic drum', 1),
(18, 'Galvanic disc', 1),
(19, 'Galvanic support repair kit', 1),
(20, 'Galvanic hand brake cable', 1),
(21, 'Galvanic disc bolt', 2),
(22, 'Galvanic support mounting bolt', 2),
(23, 'Galvanic vacuum amplifier', 2),
(24, 'Galvanic seals and tubes', 2),
(25, 'Galvanic support', 2),
(26, 'Main galvanic cylinder', 2),
(27, 'Galvanic wear sensor', 2),
(28, 'Galvanic pad wear sensor', 3),
(29, 'ABS sensor', 3),
(30, 'Clutch bolt', 4),
(31, 'Clutch lever pin', 4),
(32, 'Clutch lever fork', 4),
(33, 'Clutch lever', 4),
(34, 'Clutch cylinder', 4),
(35, 'Clutch disc', 4),
(36, 'Clutch bolt kit', 4),
(37, 'CV joint', 5),
(38, 'Automatic transmission oil filter', 5),
(39, 'Transmission oil pump', 5),
(40, 'Transmission control linkage', 5),
(41, 'Transmission pan gasket', 5),
(42, 'Automatic transmission pan gasket', 5),
(43, 'Shock absorber', 6),
(44, 'Shock absorber mount bolt', 6),
(45, 'Shock absorber axis bolt', 6),
(46, 'Shock absorber bushing', 6),
(47, 'Stabilizer bushing', 6),
(48, 'Steering rack boot', 7),
(49, 'Steering drive shaft', 7),
(50, 'Steering rack', 7),
(51, 'Steering tie rod', 7),
(52, 'Steering tie rod ends', 7),
(53, 'Steering rack and pinion kit', 7),
(54, 'Timing belt roller', 8),
(55, 'Timing belt kit', 8),
(56, 'Roller pulley', 8),
(57, 'Tensioner pulley', 8),
(58, 'Drive belt tensioner roller', 8),
(59, 'Valve cover', 9),
(60, 'Exhaust manifold', 9),
(61, 'Intake manifold', 9),
(62, 'Engine support bolt', 9),
(63, 'Engine distance shaft', 9),
(64, 'Crankshaft seal key', 9),
(65, 'Manifolds and housings', 9),
(66, 'Exhaust manifold', 10),
(67, 'Exhaust manifold gasket', 10),
(68, 'Catalytic converter', 10),
(69, 'Exhaust system gasket kit', 10),
(70, 'Exhaust pipe fastening', 10),
(71, 'Exhaust pipe receiver', 10),
(72, 'Exhaust manifold gasket', 10),
(73, 'Air filter housing cover', 11),
(74, 'Oil filter', 11),
(75, 'Fuel filter', 11),
(76, 'Cabin filter', 11),
(77, 'Transmission filter', 11),
(78, 'Radiator fan', 12),
(79, 'Radiator fan resistor', 12),
(80, 'Radiator fan motor', 12),
(81, 'Radiator fan shroud', 12),
(82, 'Thermostat housing', 12),
(83, 'Radiator fan clutch', 12),
(84, 'Radiator cap', 12),
(85, 'Belts', 13),
(86, 'A/C compressor clutch', 13),
(87, 'A/C radiator fan shroud', 13),
(88, 'Dehydrator', 13),
(89, 'A/C radiator', 13),
(90, 'Cabin filter', 13),
(91, 'Cabin heater fan', 14),
(92, 'A/C compressor pulley', 14),
(93, 'Heater radiator mounting kit', 14),
(94, 'A/C compressor pulley clutch', 14),
(95, 'Heater radiator gasket', 14),
(96, 'Heater radiator', 14),
(97, 'Car batteries', 15),
(98, 'Starter generator', 15),
(99, 'Alternator', 15),
(100, 'Rain sensor', 15),
(101, 'Outside temperature sensor', 15),
(102, 'Air pressure sensor', 15),
(103, 'Steering angle sensor', 15),
(104, 'Internal lights', 16),
(105, 'Main light insert', 16),
(106, 'Anti-fog light insert', 16),
(107, 'Daytime running lights', 16),
(108, 'Rear light', 16),
(109, 'Rear anti-fog light', 16),
(110, 'Fog light kit', 16),
(111, 'Spark plug insulator', 17),
(112, 'Ignition coil boot', 17),
(113, 'Ignition coil cap', 17),
(114, 'Ignition coil protective cap', 17),
(115, 'Ignition distributor contact group', 17),
(116, 'Ignition coil', 17),
(117, 'Bumper', 18),
(118, 'Bumper mounting kit', 18),
(119, 'Bumper trim', 18),
(120, 'Radiator grille', 18),
(121, 'Grille', 18),
(122, 'Trunk gas strut', 19),
(123, 'Trunk lid handle', 19),
(124, 'Trunk door handle', 19),
(125, 'Trunk door lock handle', 19),
(126, 'Hood gas strut', 20),
(127, 'Hood', 20),
(128, 'Hood release handle', 20),
(129, 'Hood release cable', 20),
(130, 'Door', 21),
(131, 'Door frame', 21),
(132, 'Door handle', 21),
(133, 'Fog lamp frame', 22),
(134, 'Frames of the main headlight', 22),
(135, 'Wiper adapter', 23),
(136, 'Windshield washer reservoir', 23),
(137, 'Windshield washer pump gasket', 23),
(138, 'Washer reservoir cap', 23),
(139, 'Windshield washer direction nozzle', 23),
(140, 'Windshield washer pump', 23),
(141, 'Rear glass', 24),
(142, 'Windshield', 24),
(143, 'Door glass', 24);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;
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
