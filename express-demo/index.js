const Joi = require("joi");
const express = require("express");
const app = express();
app.use(express.json());
const courses = [
  { id: 1, name: "English" },
  { id: 2, name: "Biology" },
  { id: 3, name: "Physics" },
];
//get all courses
app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});
//with id
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((r) => r.id === parseInt(req.params.id));
  if (!course) res.status(404).send("Course with specified id was not found");
  res.send(course);
});
app.post("/api/courses", (req, res) => {
  const result = validateCourse(req.body);
  if (result.error) {
    // 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const newCourse = { id: courses.length + 1, name: req.body.name };
  courses.push(newCourse);
  res.send(newCourse);
});
// app.post("/api/courses", (req, res) => {
//   if (!req.body.name || req.body.name.length < 3) {
//     // 400 bad request
//     res.status(400).send("Name is required and should be min 3 character");
//     return;
//   }
//   const newCourse = { id: courses.length + 1, name: req.body.name };
//   courses.push(newCourse);
//   res.send(newCourse);
// });
// //multiple parameter
// app.get("/api/courses/:name/:id", (req, res) => {
//   res.send(`Course name ${req.params.name} and Course Id: ${req.params.id}`);
// });

//access all params as object
//multiple parameter
// app.get("/api/courses/:name/:id", (req, res) => {
//   res.send(req.params);
// });
//accessing request query
// app.get("/api/courses/:id", (req, res) => {
//   res.send(req.query);
// });
app.put("/api/courses/:id", (req, res) => {
  const course = courses.find((r) => r.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("The course with requested id is not found");
    return;
  }
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  course.name = req.body.name;
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(req.body);
}
