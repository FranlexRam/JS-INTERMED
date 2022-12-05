/*  1) Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos
uno por uno (no se vale imprimir el array completo). */

function imprimirElementoPorElemento (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);        
    }
}


/*  2) Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno
(no se vale imprimir el objeto completo). */

function imprimirObjeto (obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);        
    }
}


/*  3) Colocar como replicar este comportamiento con arrays u objetos y solo UN condicional. */

//Crear un objeto:

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de platzi durante un mes.',
    expert: 'Puedes tomar casi todos los cursos de platzi durante un anho.',
    expertduo: 'Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un anho.'
}

function conseguirTipoDeSuscripcion (suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;        
    }

    console.warn('Ese tipo de suscripcion NO existe');
}

conseguirTipoDeSuscripcion('free');//Mandar a llamar a la funcion con el parametro especifico colocado.