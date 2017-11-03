-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 22 Juin 2016 à 13:20
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `aston`
--

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE IF NOT EXISTS `auteur` (
  `id_auteur` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `fonction` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_auteur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=43 ;

--
-- Contenu de la table `auteur`
--

INSERT INTO `auteur` (`id_auteur`, `nom`, `prenom`, `fonction`) VALUES
(1, 'Almasy', 'Paul', 'Photographe'),
(2, 'Goupy', 'Didier', 'Photographe'),
(3, 'Le Danvic', 'Daniel', 'Photographe'),
(4, 'Turk', 'Philippe', 'Illustrateur'),
(5, 'Van Eersel', 'Patrice', 'Interviewer'),
(6, 'Ayrault', 'Philippe', 'Photographe'),
(7, 'Grillo', 'Alex', 'Musicien'),
(8, 'Vidard', 'Mathieu', 'Interviewer'),
(9, 'Stewart', 'Rob', 'Photographe'),
(10, 'Langot', 'Michel', 'Photographe'),
(11, 'Francq', 'Philippe', 'Illustrateur'),
(12, 'Fournier', 'Alain', 'Photographe'),
(13, 'Vezon', 'Thierry', 'Photographe'),
(14, 'Montvalon', 'Dominique de', 'Interviewer'),
(15, 'Blondeau', 'Manuel', 'Photographe'),
(16, 'Brinkmann', 'Bettina', 'Photographe'),
(17, 'Bartoli', 'Georges', 'Photographe'),
(18, 'Paoluzzo', 'Marco', 'Photographe'),
(19, 'Vallorani', 'Jean-Pierre', 'Photographe'),
(20, 'Chandelier', 'Estelle', 'Maquettiste'),
(21, 'Weber', 'Bob', 'Interviewer'),
(22, 'Le Scanff', 'Gilles', 'Photographe'),
(23, 'Sander', 'Eric', 'Photographe'),
(24, 'Salvat', 'Philippe', 'Photographe'),
(25, 'Scope image', '', 'Photographe'),
(26, 'Bednorz', 'Achim', 'Photographe'),
(27, 'Calm', 'Nathalie', 'Interviewer'),
(28, 'Lismonde', 'Pascale', 'Interviewer'),
(29, 'Diluka', 'Shani', 'Musicien'),
(30, 'L''ensemble Obsidienne', '', 'Musicien'),
(31, 'Les Biskotos', '', 'Musicien'),
(32, 'Orchestre national de Paris', '', 'Musicien'),
(33, 'Orchestre Philharmonique de Radio France', '', 'Musicien'),
(34, 'Keefe', 'John', 'Photographe'),
(35, 'Stegassy', 'Ruth', 'Interviewer'),
(36, 'Damase', 'Jo', 'Photographe'),
(37, 'Varilh', 'Clarisse', 'Musicien'),
(38, 'Enthoven', 'Rapha', 'Interviewer'),
(39, 'Hazan', 'Muriel', 'Photographe'),
(40, 'Aubin', 'Antoine', 'Illustrateur');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
