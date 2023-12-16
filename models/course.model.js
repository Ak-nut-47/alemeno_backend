const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    enrollmentStatus: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    prerequisites: {
        type: [String],
        default: [],
    },
    syllabus: {
        type: [
            {
                week: {
                    type: Number,
                    required: true,
                },
                topic: {
                    type: String,
                    required: true,
                },
                content: {
                    type: String,
                    required: true,
                },
            },
        ],
        default: [],
    },
    students: {
        type: [
            {
                name: {
                    type: String,
                    required: true,
                },
                email: {
                    type: String,
                    required: true,
                },
            },
        ],
        default: [],
    },
});

const CourseModel = mongoose.model('Course', courseSchema);

module.exports = CourseModel;


