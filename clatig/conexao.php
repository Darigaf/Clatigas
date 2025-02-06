<?php
//Conexão com o banco de dados
$servername = "localhost";   //poderia ser "localhost"
$username = "root";
$password = "";
$dbname = "musicas";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}
?>