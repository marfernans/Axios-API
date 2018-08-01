new Vue({
    el: 'main',
    mounted() {
        this.cargarPersona();
    },

    data: {
        persona: []
    },

    methods: {
        cargarPersona(){
            axios.get('https://randomuser.me/api/?results=324')
                .then((respuesta)=> {
                   this.persona = respuesta.data.results;
                });
        }
    }
   
});