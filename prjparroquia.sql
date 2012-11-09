-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2012 a las 02:24:33
-- Versión del servidor: 5.5.27
-- Versión de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `prjparroquia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matrimonios`
--

CREATE TABLE IF NOT EXISTS `matrimonios` (
  `id` int(11) NOT NULL,
  `apellidoPaternoH` varchar(30) NOT NULL,
  `apellidoMaternoH` varchar(30) NOT NULL,
  `nombreH` varchar(30) NOT NULL,
  `apellidoPaternoM` varchar(30) NOT NULL,
  `apellidoMaternoM` varchar(30) NOT NULL,
  `nombreM` varchar(30) NOT NULL,
  `unknow_0` varchar(6) NOT NULL,
  `unknow_1` varchar(6) NOT NULL,
  `unknow_2` varchar(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `matrimonios`
--

INSERT INTO `matrimonios` (`id`, `apellidoPaternoH`, `apellidoMaternoH`, `nombreH`, `apellidoPaternoM`, `apellidoMaternoM`, `nombreM`, `unknow_0`, `unknow_1`, `unknow_2`) VALUES
(1, 'ACEVEDO', 'CASILLAS', 'ANTONIO RAFAEL', 'VERA', 'GARCÍA', 'MARÍA', '50', '55 v', '221');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
