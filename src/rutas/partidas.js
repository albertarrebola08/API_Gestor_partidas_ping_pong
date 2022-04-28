const express = require('express');
const router = express.Router();


//RUTA PARTIDAS
router.get('/api/partidas', (req, res) => {
    res.send('Hola partidas')
})

module.exports = router;