const app = Vue.createApp({

  data () {
      return {
        placeholderName: [],
        name: [],
        gender: [],
        species: [],
        status: [],
        originName: [],
        created: [],
        image: [],
        locationName: [],
      }
  },

  mounted () {

    const apiUrl = 'https://rickandmortyapi.com/api/character'
    
      axios.get(apiUrl)
          .then(res => 
            {
              this.placeholderName = res.data.results[17].name
              this.name = res.data.results
              this.gender = res.data.results
              this.species = res.data.results
              this.status = res.data.results
              this.originName = res.data.results.origin
              this.locationName = res.data.results[17].location.name
              this.created = res.data.results
              this.image = res.data.results
            }
      )
  }
  
});

app.mount('#app')


