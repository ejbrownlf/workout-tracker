const mongoose = require('mongoose');

const workout = new mongoose.Schema({
    name: {
        type: String
    },
    duration: {
        type: Number
    },
    exercises: {
        type: Array
    },
    
});

const WorkoutModel = mongoose.model("Workout", workout, 'workouts');

module.exports = WorkoutModel;