<?php
include_once 'conexao.php';
?>
<html lang="pt-br"> 
    <head>
        <title> Resultados </title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    
    <body>
        <h1> Resultados: </h1>
        <div id= "result">
            <?php
            // Recebendo a pesquisa e coluna escolhida
            $nome = $_POST['nome'] ?? '';
            $coluna = $_POST['coluna'] ?? '';
            
            // Validando a coluna escolhida para evitar SQL Injection
            $colunas_validas = ['nome_musicas', 'letra_musicas', 'partitura_musicas', 'tags_musicas'];
            if (in_array($coluna, $colunas_validas)) {
                $sql = "SELECT * FROM musicas_tabela WHERE $coluna LIKE '%$nome%'";
            } else {
                echo "<h1> Coluna inválida. </h1>";
                exit;
            }
            
            $resultado = $conn->query($sql);
            
            if ($resultado->num_rows > 0) {
                while ($row = $resultado->fetch_assoc()) {
                    echo "<h3> <a href='" . $row['arquivo_musicas'] . "'>" . $row['nome_musicas'] . "</a> </h3>";
                    echo "<p>" . $row['letra_musicas'] . "</p>";
                }
            } else {
                echo "<h1> Nenhuma música encontrada </h1>";
            }
            
            $conn->close();
            ?>
        </div>
    </body>
</html>
