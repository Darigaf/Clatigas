-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/02/2025 às 01:23
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `musicas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `musicas_tabela`
--

CREATE TABLE `musicas_tabela` (
  `id_musicas` int(11) NOT NULL,
  `nome_musicas` char(100) NOT NULL,
  `letra_musicas` text NOT NULL,
  `partitura_musicas` text NOT NULL,
  `tags_musicas` char(150) NOT NULL,
  `arquivo_musicas` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `musicas_tabela`
--

INSERT INTO `musicas_tabela` (`id_musicas`, `nome_musicas`, `letra_musicas`, `partitura_musicas`, `tags_musicas`, `arquivo_musicas`) VALUES
(1, 'ativa senior', 'e a tropa senior ataca massacra impoe o seu valor com essa seção só tem terror', 'partituras fodas 123', 'ativa grito dança', 'ativa-senior.html'),
(2, 'pipoca', 'uma pipoca estourando na panela outra pipoca veio responder é um tal de ploc ploploc ploplocplocploc', 'partitura foda 123', 'dança lobinho senior escoteiro pioneiro divertido pulo', 'pipoca.html'),
(3, 'arvore na montanha', 'nao sei a letra dessa, vou ficar devendo', 'partitura foda 123', 'escoteiro senior pioneiro caminhada', 'arvore-na-montanha.html'),
(4, 'grito patrulha jaragua', 'sempre foi e sempre será patrulha jaragua com força irá lutar nao podemos desistir nós iremos com força com garra e com amor', 'partitura 123', 'patrulha grito senior', 'grito-patrula-jaragua.html');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `musicas_tabela`
--
ALTER TABLE `musicas_tabela`
  ADD PRIMARY KEY (`id_musicas`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `musicas_tabela`
--
ALTER TABLE `musicas_tabela`
  MODIFY `id_musicas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
