-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Jun 2019 pada 19.11
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 7.2.16

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
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(5, 'joni'),
(6, 'ganti'),
(7, 'barru'),
(8, 'ujicoba'),
(9, 'ujicoba');

-- --------------------------------------------------------

--
-- Struktur dari tabel `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `tittle` varchar(200) NOT NULL,
  `note` text NOT NULL,
  `time` date NOT NULL,
  `category_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `notes`
--

INSERT INTO `notes` (`id`, `tittle`, `note`, `time`, `category_id`) VALUES
(8, 'Where does it come from?', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professo', '2019-06-18', '6'),
(9, 'Where can I get some?', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believabl', '2019-06-18', '6'),
(10, 'Contrary to popular belief', ' Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin profe', '2019-06-19', '7'),
(12, 'What is Lorem Ipsum?', 'rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and', '2019-06-19', '5'),
(13, 'Why do we use it?', 't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribu', '2019-06-19', '6'),
(14, 'Where does it come from?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when a', '2019-06-19', '7'),
(15, 'Where can I get some?', 'ok like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a', '2019-06-19', '8'),
(16, 'Where can I get some?', 'piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke', '2019-06-19', '7'),
(17, 'Where can I get some?', 'er 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going throug', '2019-06-19', '8'),
(18, 'Where does it come from?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when a', '2019-06-19', '7'),
(19, 'Where can I get some?', 'ok like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a', '2019-06-19', '8'),
(20, 'Where can I get some?', 'piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke', '2019-06-19', '7'),
(21, 'Where can I get some?', 'er 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going throug', '2019-06-19', '8'),
(22, 'Where does it come from?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when a', '2019-06-19', '7'),
(23, 'Where can I get some?', 'ok like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a', '2019-06-19', '8'),
(24, 'Where can I get some?', 'piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke', '2019-06-19', '7'),
(25, 'Where can I get some?', 'er 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going throug', '2019-06-19', '8'),
(26, 'Where does it come from?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when a', '2019-06-19', '7'),
(27, 'Where can I get some?', 'ok like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a', '2019-06-19', '8'),
(28, 'Where can I get some?', 'piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke', '2019-06-19', '7'),
(29, 'Where can I get some?', 'er 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going throug', '2019-06-19', '8'),
(30, 'Where does it come from?', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when a', '2019-06-19', '7'),
(31, 'Where can I get some?', 'ok like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, a', '2019-06-19', '8'),
(32, 'Where can I get some?', 'piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looke', '2019-06-19', '7'),
(33, 'Where can I get some?', 'er 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going throug', '2019-06-19', '8');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
