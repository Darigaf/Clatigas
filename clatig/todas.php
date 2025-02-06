<?php
include_once 'conexao.php';
?>
<html lang="pt-br"> 
    <head>
        <title> Biblioteca Completa </title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    
    <body>
        <h1> Biblioteca Completa </h1>
        <div id= "result">
            <?php
            // Consulta para buscar todas as músicas em ordem alfabética
            $sql = "SELECT * FROM musicas_tabela ORDER BY nome_musicas ASC";
            $resultado = $conn->query($sql);
            
            if ($resultado->num_rows > 0) {
                // Exibindo cada música
                while ($row = $resultado->fetch_assoc()) {
                    echo "<h3><a href='" . $row['arquivo_musicas'] . "'>" . htmlspecialchars($row['nome_musicas']) . "</a></h3>";
                    echo "<p>" . nl2br(htmlspecialchars($row['letra_musicas'])) . "</p>";
                }
            } else {
                echo "<h1> Nenhuma música encontrada </h1>";
            }
            
            $conn->close();
            ?>
        </div>
    </body>
</html>
