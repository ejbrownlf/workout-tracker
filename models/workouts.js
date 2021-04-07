const mongoose = require('mongoose');

const workout = new mongoose.Schema(
    {
        day: {
            type: Date,
            default: Date.now()
        },
        exercises: [
            {
                type: { type: String},
                name: {type: String},
                duration: { type: Number },
                weight: { type: Number },
                reps: { type: Number},
                sets: { type: Number},
                distance: { type: Number},
            }
        ]
    },
);

const WorkoutModel = mongoose.model("Workout", workout, 'workouts');

module.exports = WorkoutModel;