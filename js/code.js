function ciclotriangulo() {
    let n = document.getElementById("num").value;
    var piramide = "";
    var resultado = "";
    for (let i = 0; i < n; i++) {
        piramide += " #";
        // document.write imprime en otra pantalla
        // document.write(piramide + "<br>");
        resultado += "<p>" + piramide + "</p>";
    }
    document.getElementById("res").innerHTML = resultado;
}