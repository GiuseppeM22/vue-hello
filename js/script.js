const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Benvenuti in VU',
      utente : "",
      colore: "color",
      link : "",
      dimensione: "grandezza",
      numeroUtente: this.numeroRandom()
    }
  },
  methods: {
    numeroRandom(){
     return Math.floor(Math.random()*10 + 1)
  },
    generaImmagine(){
      return this.link = "./img/wayne.jpg"
    }}
}).mount('#app')