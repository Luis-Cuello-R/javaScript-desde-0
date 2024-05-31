/*
Crear un programa que simule un stack usando los metodos push y pop. El stack debe guardar una coleccion de libros. El usuario puede realizar las siguientes acciones:
- Agregar un libro al tope del stack
- Sacar un libro del tope del stack
- Mostrar todos los libros

Se debe implementar un loop que permita al usuario realizar estas acciones hasta que decida salir.
*/

function decitions (bookStack, option) {
    switch (option) {
        case 'add':
            const book = prompt('Ingrese el nombre del libro');
            bookStack.push(book);
            break;
        case 'remove':
            bookStack.pop();
            break;
        case 'show':
            alert(bookStack);
            break;
        case 'exit':
            break;
        default:
            console.log('Opcion invalida');
            break;
    }
}

function app() {
    let books = [];
    let option = '';
    while (option !== 'exit') {
        option = prompt('Ingrese una opcion: add, remove, show, exit');
        decitions(books, option);
    }
}

app();