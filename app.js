const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 8183

app.use(express.static('public'))

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')



app.get('/', (req, res) =>{
    //res.send('Página no encontrada')
    //res.sendFile(__dirname + '/public/views/login.html')
    res.render('login', {
        nombre: 'Login'
    })
})


app.get('/home', (req, res) =>{
    //res.send('Contacto')
    res.render('home', {
        nombre: 'Home'
    })
})




app.get('*', (req, res) =>{
    //res.send('Página no encontrada')
    //res.sendFile(__dirname + '/public/views/404.html')
    res.render('404', {
        nombre: 'Pagina no encontrada'
    })
})





app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
} )