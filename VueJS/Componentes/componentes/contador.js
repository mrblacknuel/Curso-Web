Vue.component('contador', {
    data() {
        return {
            contador: 0
        }
    },
    template: //html
    `
    <div>
        <h3>{{contador}}</h3>
        <button class="btn btn-primary" @click="contador++">+</button>
    </div>
    `
})