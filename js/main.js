//Autor: Jeffo
//Tema: Tabla de Fibonacci
var divDatos = document.getElementById("datos");
divDatos.style.display = "none";

//genera la serie y y muestra en tabla
document.getElementById("generar")
    .addEventListener("click", function () {
        // consigue los valores de los input
        var p = parseInt(document.getElementById("primerDigito").value);
        var s = parseInt(document.getElementById("segundoDigito").value);
        var m = parseInt(document.getElementById("maximo").value);

        // genera la serie de fibonacci
        fibonacci = new Solver(p, s, m);
        fibonacci.serie = [];
        fibonacci.generador();

        // muestra el div datos
        divDatos.style.display = "block";

        // muestra la serie en la tabla
        fibonacci.mostrar(fibonacci.serie);

        // vaciar datos
        document.getElementById("primerDigito").value = "";
        document.getElementById("segundoDigito").value = "";
        document.getElementById("maximo").value = "";

    });

//calcula los pares
document.getElementById("pares")
    .addEventListener("click", function () {
        //vaciar la tabla
        var tabla = document.getElementById("tablaDeDatos");
        var filas = tabla.getElementByTagname("tr");
        var inicio = filas.length - 1;
        
        fibonacci.borrarTabla(inicio);

        //vacia el array de multiplos
        fibonacci.multiplos = [];

        //calcula los pares
        fibonacci.calculaMultiplo(fibonacci.serie, "a");

        //muestra los datos
        fibonacci.mostrar(fibonacci.multiplos);

    });

//calcula los impares
document.getElementById("impares")
    .addEventListener("click", function () {
        //vaciar la tabla
        var tabla = document.getElementById("tablaDeDatos");
        var filas = tabla.getElementByTagname("tr");
        var inicio = filas.length - 1;
        
        fibonacci.borrarTabla(inicio);
        
        //vacia el array de multiplos
        fibonacci.multiplos = [];

        //calcula los pares
        fibonacci.calculaMultiplo(fibonacci.serie, "b");

        //muestra los datos
        fibonacci.mostrar(fibonacci.multiplos);

    });

//busca el número que ingresas
document.getElementById("buscar")
    .addEventListener("click", function () {
        //consigue los datos
        var numero = document.getElementById("numero");

        //busca en el array
        fibonacci.buscar(numero);

    });