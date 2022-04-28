app.get('/api/usuarios', (req, res) => {
    res.send('Hola usuarios')
})
app.get('/api/partidas', (req, res) => {
    res.send('Hola partidas')
})
app.get('/*', (req, res) => {
    res.status(404)
    res.send('Página no encontrada -- ERROR 404')
    
    
})