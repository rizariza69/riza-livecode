let axios = require('axios')

new Vue({
    el: "#app",
    data: {
      name: '',
      email: '',
      password: ''
    },
    methods: {
      login: function() {
        
        axios({
            method: "POST",
            url: "http://localhost:3000/users/login",
            data: {
              email: this.email,
              password: this.password
            },
            headers: {
              'Access-Control-Allow-Origin': '*'
            }
          })
          .then(response => {
            localStorage.setItem('token', response.data.token)
            window.location = "http://localhost:8080/uberfox-livecode1-htmlTemplate"
          })
          .catch(err => {
            this.message = "username/password wrong"
          })
      }

    }
  })