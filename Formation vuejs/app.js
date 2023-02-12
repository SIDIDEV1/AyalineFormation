const app = Vue.createApp({
    data() {
        return {
            name: 'Ayaline',
            year: 2023
        }
    },
    methods: {
        changeName(text) {
            this.name = text
        }
    }
})

app.mount('#app')