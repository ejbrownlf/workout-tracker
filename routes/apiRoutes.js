const router = require('express').Router();
const { Workout } = require('../models');

module.exports = () => {
    router.get('/workouts', (req, res) => {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    });

    router.post('/workouts');

    router.put('/workouts',);

    router.get('/workouts/range');
    
}