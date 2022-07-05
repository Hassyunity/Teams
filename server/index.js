const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = (req.body);
    const newTodo = await pool.querry("INSERT INTO list (description) VALLUES($2)",
      [description]
    );

    res.json(newTodo)
  } catch (err) {
    console.error(err.message);
  }
})

//get all todos

app.get("/todos", async (reg, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM list")
    res.json(allTodos.rows)
  } catch (err) {
    console.error(err.message)
  }
})
//get a todo

//update todo

//delete a todo

app.listen(5000, () => {
  console.log("server has started on port 5000")
});