-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 07 Jul 2019 pada 05.17
-- Versi server: 10.3.16-MariaDB
-- Versi PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simple_note_app`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`, `image`) VALUES
(6, 'learn', ''),
(7, 'personal', 'https://s3-alpha-sig.figma.com/img/8b03/73d9/86f4eb40d1e52e9f052c0ad043647b15?Expires=1563148800&Signature=I6NnzUZDdPW4YuzSsMJK8N7W~LlD7oR4iCnt3zKf7Hdm469sHfMUIPdDIaZEKoDC41g~nKwfjU50VdzpU7w7sv3wRRIC~eRy61mYRtffCDXqGfbWSaGreuI1sfKqn2RiLFLSxn6AdtM4wx4z26VkIWid6oO3v-tZJ1jVOPkOCejOF4b~wZ797UEk8-HqChs~8yYt9QG7S6VFgiHlb-VFhJ1akV-PTMRknut~3oPKOjAjaZaKB1Kelvpor~qv1hFnVm9k7uVR53EpXl5jdI37EK6q3Ly99S7LlrY~UOJXxGqgXjDtQ~Iu8leMCGcSnCBT3TJPYrJyL0eCwE2ado15zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'),
(8, 'daily', ''),
(9, 'Wishlist', ''),
(18, 'work', 'Oke');

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(200) NOT NULL,
  `note` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id`, `title`, `note`, `time`, `category_id`) VALUES
(100, 'Lifecycle', 'Component DidMount, Component WiilUnmount ...', '2019-07-06 16:21:14', '6'),
(101, 'Hooks', 'UseState, UseEffect, UseConteks, UseStyle, UseReducer, UseRef ...', '2019-07-06 16:21:14', '6'),
(103, 'Daily Standup', 'Yesterday i’m learn about react native, Today i will start make application ... ', '2019-07-06 16:21:14', '18'),
(104, 'Macbook', 'I have to buy a Macbook this year ... ', '2019-07-06 16:21:14', '9'),
(105, ' Daily Standup', 'Yesterday i’m learn about react native, Today i will start make application ...', '2019-07-06 16:21:14', '18'),
(106, 'Today', 'Install React Native, Learn about React Native, Make simple app ...', '2019-07-06 16:21:14', '7');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT untuk tabel `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=171;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
