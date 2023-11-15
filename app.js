const express= require('express');
const app= express();
const PORT= 3000;
const rutaMain= require('./routes/main.js')
app.set('view engine','ejs')


app.listen(PORT,()=>{
    console.log(`Servidor escuchando puerto ${PORT}`); 
})


app.use(express.static('public'));
app.use(rutaMain)