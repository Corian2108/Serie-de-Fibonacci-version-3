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
        this.borrarTabla = borrarTabla;
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
    tope = contenedor.length
    if (inicio < tope) {
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
function calculaMultiplo(serie, opcion, ) {
    //identifica qué calcular
    if (opcion === "a") {//identifica pares
        serie.forEach(esPar)
    } else {
        if (opcion === "b") {//identifica impares
            serie.forEach(esImpar)
        }
    }
};

function esPar(elemento) {
    if (elemento % 2 === 0) {
        fibonacci.multiplos.push(elemento)
    }
};

function esImpar(elemento) {
    if (elemento % 2 === 1) {
        fibonacci.multiplos.push(elemento)
    }
};

//buscar en el array
function buscar(numero) {
    num = parseInt(numero.value);

    //consigue los elementos de la tabla
    elementosTabal = document.getElementsByTagName("table")[0];
    misCeldas = elementosTabal.getElementsByTagName("td");

    //cambia el color de la celda correspondiente al numero
    resalta = misCeldas[this.serie.indexOf(num)];
    resalta.style.bacground = "rgb(255,0,0)";
}

//borra la tabla
function borrarTabla(inicio) {
    tabla = document.getElementById("tablaDeDatos");
    filas = tabla.getElementsByTagName("tr");

    if (inicio > 1) {
        tabla.removeChild(filass[inicio]);
        return (--inicio);
    }
}