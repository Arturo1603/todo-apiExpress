//* Como pusimos en nuestro package.json "type":"module" podemos usar import 
import express from "express";

//guardamos la funcion express, no estamos instanciando, solo asignando
const app = express();


app.get("/", (request, response) => {
    response.json({
        message: "Hola mundo",
    })

});



app.listen(6001, () => {
    console.log("El servidor inicio en el puerto http://localhost:6001");
});