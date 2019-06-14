-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Gegenereerd op: 14 jun 2019 om 19:57
-- Serverversie: 5.7.26-0ubuntu0.18.04.1
-- PHP-versie: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `cars`
--

CREATE TABLE `cars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double(8,2) DEFAULT NULL,
  `pk` int(11) DEFAULT NULL,
  `kw` int(11) DEFAULT NULL,
  `topspeed` int(11) DEFAULT NULL,
  `acceleration` double(8,2) DEFAULT NULL,
  `acceleration_sport` double(8,2) DEFAULT NULL,
  `fuel_consumption` double(8,2) DEFAULT NULL,
  `power_consumption` double(8,2) DEFAULT NULL,
  `emission` double(8,2) DEFAULT NULL,
  `drive` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` int(11) DEFAULT NULL,
  `width` int(11) DEFAULT NULL,
  `length` int(11) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `luggage` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `cars`
--

INSERT INTO `cars` (`id`, `category_id`, `name`, `price`, `pk`, `kw`, `topspeed`, `acceleration`, `acceleration_sport`, `fuel_consumption`, `power_consumption`, `emission`, `drive`, `height`, `width`, `length`, `weight`, `luggage`) VALUES
(1, 1, 'Cayman', 56966.80, 300, 220, 275, 5.30, 4.70, 7.90, NULL, 180.00, 'Achterwielaandrijving', 1295, 1994, 4379, 1335, 150),
(2, 1, 'Cayman S', 69671.80, 350, 257, 285, 4.90, 4.20, 8.50, NULL, 193.00, 'Achterwielaandrijving', 1295, 1994, 4379, 1355, 150),
(3, 1, 'Boxster', 59023.80, 300, 220, 275, 5.30, 4.70, 7.90, NULL, 180.00, 'Achterwielaandrijving', 1281, 1994, 4379, 1335, 150),
(4, 1, 'Boxster S', 71728.80, 350, 257, 285, 4.90, 4.20, 8.50, NULL, 194.00, 'Achterwielaandrijving', 1280, 1994, 4379, 1355, 150),
(5, 1, 'Cayman T', 65799.80, 300, 220, 275, 5.30, 4.70, 7.90, NULL, 180.00, 'Achterwielaandrijving', 1276, 1994, 4379, 1350, 150),
(6, 1, 'Boxster T', 67856.80, 300, 220, 275, 5.30, 4.70, 7.90, NULL, 181.00, 'Achterwielaandrijving', 1264, 4379, 1994, 1350, 150),
(7, 1, 'Cayman GTS', 80198.80, 365, 269, 290, 4.90, 4.10, 8.50, NULL, 194.00, 'Achterwielaandrijving', 1286, 1994, 4393, 1375, 150),
(8, 1, 'Boxster GTS', 82255.80, 365, 269, 290, 4.90, 4.10, 8.50, NULL, 195.00, 'Achterwielaandrijving', 1272, 1994, 4379, 1375, 150),
(9, 2, 'Carrera S', 123395.80, 450, 331, 308, 3.70, NULL, 8.90, NULL, 205.00, 'Achterwielaandrijving', 1300, 2024, 4519, 1515, 132),
(10, 2, 'Carrera S Cabriolet', 137915.80, 450, 331, 306, 3.90, NULL, 9.10, NULL, 208.00, 'Achterwielaandrijving', 1299, 2024, 4519, 1585, 132),
(11, 2, 'Carrera 4S', 131381.80, 450, 331, 306, 3.60, NULL, 9.00, NULL, 206.00, 'Achterwielaandrijving', 1300, 2024, 4519, 1565, 132),
(12, 2, 'Carrera 4S Cabriolet', 145901.80, 450, 331, 304, 3.80, NULL, 9.00, NULL, 207.00, 'Achterwielaandrijving', 1299, 2024, 4519, 1635, 132),
(13, 2, 'Speedster', 276339.80, 510, 375, 310, 3.80, NULL, 13.80, NULL, 317.00, 'Achterwielaandrijving', 1250, 1978, 4562, 1465, 125),
(14, 2, 'GT3 RS', 200109.80, 520, 383, 312, 3.20, NULL, 13.20, NULL, 303.00, 'Achterwielaandrijving', 1297, 1978, 4557, 1430, 125),
(15, 2, 'GT2 RS', 291706.80, 700, 515, 340, 2.80, NULL, 11.80, NULL, 269.00, 'Achterwielaandrijving', 1297, 1978, 4549, 1470, 115),
(16, 3, '4', 97985.80, 330, 243, 262, 5.50, 5.30, 8.40, NULL, 192.00, '4-wielaandrijving', 1423, 2165, 5049, 1865, 500),
(17, 3, '4 Sport Turismo', 100889.80, 330, 243, 259, 5.50, 5.30, 8.70, NULL, 200.00, '4-wielaandrijving', 1428, 2165, 5049, 1910, 520),
(18, 3, '4 Executive', 107786.80, 330, 243, 262, 5.60, 5.40, 8.60, NULL, 197.00, '4-wielaandrijving', 1428, 2165, 5199, 1975, 500),
(19, 3, '4S', 121459.80, 440, 324, 289, 4.40, 4.20, 8.30, NULL, 190.00, '4-wielaandrijving', 1423, 2165, 5049, 1870, 500),
(20, 3, '4S Sport Turismo', 126299.80, 440, 324, 286, 4.40, 4.20, 8.60, NULL, 198.00, '4-wielaandrijving', 1428, 2165, 5049, 1915, 520),
(21, 3, '4S Executive', 135495.80, 440, 324, 289, 4.50, 4.30, 8.50, NULL, 194.00, '4-wielaandrijving', 1428, 2165, 5199, 1980, 500),
(22, 3, 'GTS', 142513.80, 460, 338, 292, 4.10, NULL, 10.30, NULL, 235.00, '4-wielaandrijving', 1417, 2165, 5053, 1995, 500),
(23, 3, 'GTS Sport Turismo', 145417.80, 460, 338, 289, 4.10, NULL, 10.60, NULL, 242.00, '4-wielaandrijving', 1422, 2165, 5053, 2025, 520),
(24, 3, 'Turbo', 160058.80, 550, 404, 306, 3.80, 3.60, 10.40, NULL, 238.00, '4-wielaandrijving', 1427, 2165, 5049, 1995, 500),
(25, 3, 'Turbo Sport Turismo', 162962.80, 550, 404, 304, 3.80, 3.60, 10.60, NULL, 243.00, '4-wielaandrijving', 1432, 2165, 5049, 2035, 520),
(26, 3, 'Turbo Executive', 173731.80, 550, 404, 306, 3.90, 3.70, 10.60, NULL, 242.00, '4-wielaandrijving', 1432, 2165, 5199, 2100, 500),
(27, 3, '4 E-Hybrid', 112747.80, 462, 340, 278, 4.60, NULL, 2.60, 16.00, 60.00, '4-wielaandrijving', 1423, 2165, 5049, 2170, 405),
(28, 3, '4 E-Hybrid Sport Turismo', 115651.80, 462, 340, 275, 4.60, NULL, 2.80, 16.10, 64.00, '4-wielaandrijving', 5049, 2165, 5049, 2190, 425),
(29, 3, '4 E-Hybrid Executive', 120370.80, 462, 340, 278, 4.70, NULL, 2.60, 16.00, 61.00, '4-wielaandrijving', 1428, 2165, 5199, 2250, 405),
(30, 3, 'S E-Hybrid', 190550.80, 680, 500, 310, 3.40, NULL, 3.30, 16.00, 74.00, '4-wielaandrijving', 1427, 2165, 5049, 2310, 405),
(31, 3, 'Turbo S E-Hybrid Sport Turismo', 193454.80, 680, 500, 310, 3.40, NULL, 3.30, 18.10, 76.00, '4-wielaandrijving', 1432, 265, 5049, 2325, 425),
(32, 3, 'Turbo S E-Hybrid Executive', 204223.80, 680, 500, 310, 3.50, NULL, 3.30, 16.00, 74.00, '4-wielaandrijving', 1432, 2165, 5199, 2410, 405),
(33, 4, NULL, 62194.00, 245, 180, 225, 6.70, 6.50, 7.90, NULL, 181.00, '4-wielaandrijving', 1624, 2098, 4696, 1795, 488),
(34, 4, 'S', 67881.00, 354, 260, 254, 5.30, 5.10, 8.90, NULL, 204.00, '4-wielaandrijving', 1624, 2098, 4696, 1865, 458),
(35, 5, NULL, 77778.80, 340, 250, 245, 6.20, 5.90, 9.10, NULL, 207.00, '4-wielaandrijving', 1696, 2194, 4918, 1985, 772),
(36, 5, 'S', 95202.80, 440, 324, 265, 5.20, 4.90, 9.20, NULL, 211.00, '4-wielaandrijving', 1696, 2194, 4918, 2020, 772),
(37, 5, 'Turbo', 142876.80, 550, 404, 286, 4.10, 3.90, 11.30, NULL, 258.00, '4-wielaandrijving', 1673, 2194, 4926, 2175, 745),
(38, 5, 'Coupé', 87083.70, 340, 250, 243, 6.00, NULL, 9.30, NULL, 212.00, '4-wielaandrijving', 1676, 2194, 4931, 2030, 625),
(39, 5, 'S Coupé', 103297.70, 440, 324, 263, 5.00, NULL, 9.20, NULL, 212.00, '4-wielaandrijving', 1676, 2194, 4931, 2050, 625),
(40, 5, 'Turbo Coupé', 150899.10, 550, 404, 286, 3.90, NULL, 11.30, NULL, 258.00, '4-wielaandrijving', 1653, 2194, 4939, 2200, 598);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` text COLLATE utf8mb4_unicode_ci,
  `title_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desc_1` text COLLATE utf8mb4_unicode_ci,
  `title_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desc_2` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `intro`, `title_1`, `desc_1`, `title_2`, `desc_2`) VALUES
(1, '718', 'The Boxster and Cayman models were originally 982 models, but have been rebranded to the legendary sports car 718 with the introduction of the fourth generation in 2016.', '718 Era', 'The Boxster and the Cayman continue the 718 era. In their 4-cylinder turbo boxer engine, the fighters heart is beating, which has already resulted in countless victories. They are determined to surpass and convince standards. So it is only logical that they now also bear these 3 digits in their name and thus continue the legend 718.', '718 Personality', 'Life is too good for compromise. To leave things behind. Not to pursue your dream. The 718 symbolizes one thing: zest for life.'),
(2, '911', 'This iconic sports car celebrates its 55th birthday in 2018. It\'s the big brother of the 718 with crazy good performance.', 'Timeless', 'The new 911 is the result of all predecessors - and therefore both retrospective and a vision of the future. The silhouette: iconic. The design: timeless. The technology: inspired by major victories and always one step ahead. With the 8th generation of the 911 we are heading for the future.', 'Design', 'Timeless and modern times have never been so close together.'),
(3, 'Panamera', 'One of the newer models in in the Porsche brand with its launch in 2009, a luxurious sedan to expand to expand the market.', 'Panamera Idea', 'Anyone who sets himself big goals in life must face them with guts and passion. The Panamera has demonstrated this impressively. From the very beginning, it went its own way and united contradictions: performance and comfort, dynamics and efficiency, work and family.', 'The Interior', 'The power of the Panamera to reconcile apparent contradictions is evident from the moment you step in: thoughtful ergonomics and a high level of comfort are combined with clear sportiness.'),
(4, 'Macan', 'The compact SUV that combines sportiness, design and practical ease of use. The first generation was available since 2014, but the Macan has already seen two facelifts.', 'Write your own story', 'We have proven that we do not allow anything to be prescribed. That we do not follow trends, but prefer to write our own adventurous stories. Such as that of a compact SUV that combines sportiness, design and practical ease of use: the new Macan', 'Aesthetics', 'For us, aesthetics is never superficial. But always an expression of personality.'),
(5, 'Cayenne', 'This SUV is the bigger brother of the Macan, in terms of age, size and performance. The Cayenne makes the Porsche experience even more versatile.', 'Dream Sharing.', 'Five doors that are open for every adventure. With a dynamic design and efficient turbo engines. With an excellent digital network with which the whole world is within reach. With versatility, quality and leading-edge assistance systems that offer exceptional comfort to the driver and passengers.\n\nThe Cayenne makes the Porsche experience even more fascinating, even more versatile. And at the same time he remains what he always was: a real sports car.', 'Design', 'SUVs come in all shapes and sizes. But there is only one that gives you the motorsport feeling right on boarding.');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Gegevens worden geëxporteerd voor tabel `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_05_05_162822_create_cars_table', 1),
(4, '2019_05_05_172721_create_categories_table', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `cars`
--
ALTER TABLE `cars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT voor een tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT voor een tabel `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
