fetch("https://type.fit/api/quotes")
.then(function f(response){
    return response.json();
})
.then(function f(value){
   console.log(value); 
})

//Git is a service while github is a service provider