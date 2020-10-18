-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Окт 18 2020 г., 13:07
-- Версия сервера: 8.0.20
-- Версия PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ms_easydictionary`
--

CREATE DATABASE IF NOT EXISTS `ms_easydictionary` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `ms_easydictionary`;

-- --------------------------------------------------------

--
-- Структура таблицы `links`
--

CREATE TABLE `links` (
  `id` int NOT NULL,
  `id-ru` int NOT NULL,
  `id-en` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- ССЫЛКИ ТАБЛИЦЫ `links`:
--   `id-ru`
--       `words-ru` -> `id`
--   `id-en`
--       `words-en` -> `id`
--

--
-- Дамп данных таблицы `links`
--

INSERT INTO `links` (`id`, `id-ru`, `id-en`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10);

-- --------------------------------------------------------

--
-- Структура таблицы `words-en`
--

CREATE TABLE `words-en` (
  `id` int NOT NULL,
  `word` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- ССЫЛКИ ТАБЛИЦЫ `words-en`:
--

--
-- Дамп данных таблицы `words-en`
--

INSERT INTO `words-en` (`id`, `word`) VALUES
(1, 'processor'),
(2, 'monitor'),
(3, 'videocard'),
(4, 'memory'),
(5, 'RAM'),
(6, 'ROM'),
(7, 'USB'),
(8, 'mouse'),
(9, 'keyboard'),
(10, 'CD');

-- --------------------------------------------------------

--
-- Структура таблицы `words-ru`
--

CREATE TABLE `words-ru` (
  `id` int NOT NULL,
  `word` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- ССЫЛКИ ТАБЛИЦЫ `words-ru`:
--

--
-- Дамп данных таблицы `words-ru`
--

INSERT INTO `words-ru` (`id`, `word`) VALUES
(1, 'процессор'),
(2, 'монитор'),
(3, 'процессор'),
(4, 'оперативная память'),
(5, 'ОЗУ'),
(6, 'ПЗУ'),
(7, 'универсальная последовательная шина'),
(8, 'мышь'),
(9, 'клавиатура'),
(10, 'компакт-диск');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id-ru` (`id-ru`),
  ADD KEY `id-en` (`id-en`);

--
-- Индексы таблицы `words-en`
--
ALTER TABLE `words-en`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `words-ru`
--
ALTER TABLE `words-ru`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `links`
--
ALTER TABLE `links`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `words-en`
--
ALTER TABLE `words-en`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `words-ru`
--
ALTER TABLE `words-ru`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `links`
--
ALTER TABLE `links`
  ADD CONSTRAINT `links_ibfk_1` FOREIGN KEY (`id-ru`) REFERENCES `words-ru` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `links_ibfk_2` FOREIGN KEY (`id-en`) REFERENCES `words-en` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
