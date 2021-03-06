const router = require('express').Router();
const { Workout } = require('../models');


router.get('/workouts', (req, res) => {

    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: ["$exercises.duration"]
                }
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.post('/workouts', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

router.put('/workouts/:id', (req, res) => {
    Workout.updateOne({ _id: req.params.id}, { $push: { exercises: req.body } })
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

router.get('/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $sort: { day: -1 }
        },
        {
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }
    ])
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
});

module.exports = router;