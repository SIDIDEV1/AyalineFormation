const app = Vue.createApp({
    data() {
        return {
            name: 'Ayaline',
            year: 2023,
            showContent: false
        }
    },
    methods: {
        changeName(text) {
            this.name = text
        },
        toggleShowContent(){
            this.showContent = !this.showContent
        }
    }
})

app.mount('#app')