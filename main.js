function buscarProduto() {

    let produto = document.getElementById("produto").value;
    let resultado = document.getElementById("resultado");

    if (produto == "") {
        alert("Selecionar um produto!");
        return;
    }

    switch (produto) {

        case "bombom":
            document .getElementById ("imagem").src= "caixadebombom.png";
            document.getElementById("preco").innerHTML="R$10,00";

            break;

        case "gelatina":
            
             document .getElementById ("imagem").src= "gelatinademorango.png";
            

            break;

        case "goma":
            
            document .getElementById ("imagem").src= "gomademascar.png";
           
            break;

        case "torta":
            
             document .getElementById ("imagem").src= "tortadechocolate.png";
            
            break;

        default:
            resultado.innerHTML = "Produto não encontrado";
    }
}

function limparBusca() {
    document.getElementById("produto").value = "";
    document.getElementById("resultado").innerHTML = "";
}