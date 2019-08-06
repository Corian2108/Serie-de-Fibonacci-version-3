//Autor: Jeffo
//Tema: Tabla de Fibonacci

class Solver {
    constructor(p, s, m) {
        //Atributos
        this.primero = p;
        this.segundo = s;
        this.maximo = m;

        //Almacen
        this.serie = [];
        this.multiplos = [];

        //Metodos
        this.generador = generar;
        this.mostrar = mostrar;
        this.calculaMultiplo = calculaMultiplo;
        this.buscar = buscar;
    }
}

//variables

var tr = document.createElement("tr");
var contadorColumna = 0;

//funciones
//generar
function generar() {
    this.serie.push(this.primero);
    this.serie.push(this.segundo);
    calcularSerie(this.serie, this.maximo);
    console.log(this.serie);
}

function calcularSerie(serie, maximo) {

    if (serie[serie.length - 2] + serie[serie.length - 1] < maximo) {
        nuevo = serie[serie.length - 2] + serie[serie.length - 1]
        serie.push(nuevo);
        return calcularSerie(serie, maximo);
    }
}

//mostrar
function mostrar(array) {
    tr = document.createElement('tr');
    tablaDeDatos.appendChild(tr)
    contador(0, array);
}

function contador(inicio, contenedor) {

    if (inicio < contenedor.length) {
        insertarColumna(inicio, contenedor);
        return contador(++inicio, contenedor)
    }
}

function insertarColumna(item, contenedor) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(contenedor[item]));
    tr.appendChild(td);
    contarColumna();
}

function contarColumna() {
    ++contadorColumna
    if (contadorColumna === 3) {
        tr = document.createElement('tr');
        tablaDeDatos.appendChild(tr)
        contadorColumna = 0;
    }
}

//calcular multiplo
function calculaMultiplo(serie, opcion) {
    //identifica qué calcular
    if (opcion === "a") {//identifica pares
        serie.forEach(esMultiplo(elemento, 2, 0))
        this.multiplos.push(elemento)
    } else {
        if (opcion === "b") {//identifica impares
            serie.forEach(esMultiplo(elemento, 2, 1))
            this.multiplos.push(elemento)
        }
    }
};

function esMultiplo(numero, divisor, resultado) {
    if (numero % divisor === resultado) {
        return true
    }
};

//buscar en el array
function buscar(numero) {
    num = parseInt(numero);

    //consigue los elementos de la tabla
    elementosTabal = document.getElementsByTagName("table")[0];
    misCeldas = elementosTabal.getElementsByTagName("td");

    //cambia el color de la celda correspondiente al numero
    resalta = misCeldas[this.serie.indexOf(num)];
    resalta.style.bacground = "rgb(255,0,0)";
}