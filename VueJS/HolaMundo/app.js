const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo con Vue',
        frutas: [
            {nombre: 'Pera', cantidad: 2},
            {nombre: 'Plátano', cantidad: 5},
            {nombre: 'Cereza', cantidad: 0}
        ]
    }
})