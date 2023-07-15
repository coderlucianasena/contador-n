document.addEventListener("DOMContentLoaded", function() {
    let valorElemento = document.getElementById("valor");
    let btnIncrementar = document.getElementById("btnIncrementar");
    let btnDecrementar = document.getElementById("btnDecrementar");
    let valor = 0;

    btnIncrementar.addEventListener("click", function() {
        valor++;
        valorElemento.textContent = valor;
    });

    btnDecrementar.addEventListener("click", function() {
        if (valor > 0) {
            valor--;
            valorElemento.textContent = valor;
        }
    });
});
