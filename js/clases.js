//Autor: Jeffo
//Tema: Tabla de Fibonacci

class Solver {
    constructor(p, s, m, mult) {
        //Atributos
        this.primero = p;
        this.segundo = s;
        this.maximo = m;
        this.multiploABuscar = mult;

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
    console.log(this.serie);
    calcularSerie(this.serie, this.maximo);
}

function calcularSerie(serie, contenedor) {

    if (serie[serie.length - 2] + serie[serie.length - 1] < contenedor) {
        nuevo = serie[serie.length - 2] + serie[serie.length - 1]
        serie.push(nuevo);
        console.log(nuevo);
        return calcularSerie(serie, contenedor);
    }
}

//mostrar
function mostrar(contenedor) {
    tr = document.createElement('tr');
    tablaDeDatos.appendChild(tr)
    contador(0, contenedor);
}

function contador(inicio, contenedor) {
    console.log(contenedor);
    x = contenedor.length
    console.log(x);
    if (inicio < x) {
        insertarColumna(inicio, contenedor);
        return contador(++inicio)

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
function calculaMultiplo(serie, opcion, ) {
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