function ciclotriangulo() {

    let n = document.getElementById("num").value;
    var piramide = "";
    for (let i = 0; i < n; i++) {
        piramide += " #";
        // document.write(piramide + "<br>");
        document.getElementById("res").innerHTML = piramide + "<br>";
    }
    alert(piramide);
}