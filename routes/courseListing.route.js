const express = require("express");
const CourseModel = require("../models/course.model");
const courseRouter = express.Router();

courseRouter.get("/", async (req, res) => {
    try {
        const courses = await CourseModel.find({})

        res.status(200).json({ courses: courses })
    } catch (error) {
        res.status(400).json("error", error.message)
    }
})

courseRouter.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const newCourse = new CourseModel({ ...req.body })

        await newCourse.save()
        res.status(200).json("courses added Successfully")
    } catch (error) {
        res.status(401).json(error.message)
    }
})

module.exports = courseRouter;