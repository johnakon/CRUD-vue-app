const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task1: { type: String, required: "task1 cannot be blank" },
  task2: { type: String, required: "taks2 cannot be blank" }
});

module.exports = mongoose.model("task", taskSchema);
