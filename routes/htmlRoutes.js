const router = require('express').Router();
const path = require('path');

module.exports = () => {
    router.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
}
