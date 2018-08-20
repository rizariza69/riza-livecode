
new Vue({
    el: '#app',
    data: {
      login: true,
      item: []
    },
    created() {
      axios({
        method: 'get',
        url: `http://localhost:3000/items/search`,
      })
      .then(response => {
        console.log(response.data)
        this.item = response.data
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  })