<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Pesquisar Músicas </title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    
    <!-- fazer 2 pagina, uma para enviar musicas novas, uma para editar as musicas ja existentes
    a pagina de edição pode ser uma pagina que mostra todas as musicas e seleciona a que quer editar, ou um
    botao em cada pagina para editar-->



    <body>
    <?php
    session_start();
    ?>

    <h1>Bem-vindo ao site!</h1>

    <?php if (isset($_SESSION['usuario'])): ?>
        <p>Você está logado como <?php echo $_SESSION['usuario']; ?></p>
    <?php endif; ?>


        <h1> Pesquisar Música </h1>
        <form action="pesquisar.php" method="post"> <!--barra de pesquisa-->
            <label for="nome"> Pesquisar: </label>
            <input type="text" name="nome" id="nome_musicas" required>
            
            <label for="coluna"> Filtrar por: </label> <!--esse trecho aqui faz a pesquisa por coluna dentro da tabela, é por aqui que to pesquisando as tags-->
            <select name="coluna" id="coluna" required>
                <option value="nome_musicas"> Nome </option>
                <option value="letra_musicas"> Letra </option>
                <option value="partitura_musicas"> Partitura </option>
                <option value="tags_musicas"> Tags </option>
            </select>
            
            <button type="submit"> Pesquisar </button>
        </form>
    </body>
</html>
