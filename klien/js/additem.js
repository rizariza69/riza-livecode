var app = new Vue({
    el: "#app",
    data:
    {
        item:

            [
                {
                    id: 1,
                    name: "Item One",
                    stock: 20,
                    price: 24.99,
                    image: "http://placehold.it/700x400"
                },
                {
                    id: 2,
                    name: "Item Two",
                    stock: 20,
                    price: 24.99,
                    image: "http://placehold.it/700x400"
                },
                {
                    id: 3,
                    name: "Item Three",
                    stock: 20,
                    price: 24.99,
                    image: "http://placehold.it/700x400"
                },
                {
                    id: 4,
                    name: "Item Four",
                    stock: 20,
                    price: 24.99,
                    image: "http://placehold.it/700x400"
                },
                {
                    id: 5,
                    name: "Item Five",
                    stock: 20,
                    price: 24.99,
                    image: "http://placehold.it/700x400"
                },
            ],
            Items:[],
            totalPrice : 0
    },
    methods: {
        addItem(){
                axios({
                    method: "POST",
                    url: "http://localhost:3000/items",
                    data: {
                        name: this.name,
                        stock: this.stock,
                        price: this.price,
                        image: this.image,
                        tag:this.tag
                        },
                    headers: {
                      token: localStorage.getItem('token')
                    }
                  })
                  .then(response => {
                    window.location = "http://localhost:8080/dashboard.html"
                    console.log(response);
      
                  }) 
                  .catch(err => {
                    
      
                  })
              
        },
        convertTousd: function (price) {
            return `$ ${price.toLocaleString()},-`
        
    },


    }





})