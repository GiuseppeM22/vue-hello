const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Benvenuti in VU',
      utente : "",
      immagineCorrente : "0",
      colore: "color",
      link : this.generaImmagine(),
      dimensione: "grandezza",
      numeroUtente: this.numeroRandom()
    }
  },
  methods: {
    numeroRandom(){
     return Math.floor(Math.random()*10 + 1)
  }},
    generaImmagine(){
      return this.link += "./img/wayne.jpg"
    }
}).mount('#app')