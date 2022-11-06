const question = require("../models/question.model.js")

async function get(req, res, next) {
  try {
      res.send(`get question: ${req.params.id}`);
  } catch (err) {
      console.error(`Error while getting questions`, err.message);
      next(err);
  }
}

async function getAll(req, res, next) {
  try {
      res.send("get questions");
  } catch (err) {
      console.error(`Error while getting questions`, err.message);
      next(err);
  }
}


async function create(req, res, next) {
  try {
    console.dir(req.body, {depth: null})

    const newQuestion = new question(req.body)

    newQuestion.save().then(() => {
      console.log("Successfully added todo!");
    })
    .catch((err) => console.log(err));

    res.send("created question");
  } catch (err) {
    console.error(`Error while creating question`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.send("update question");
  } catch (err) {
    console.error(`Error while updating question`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.send("remove question");
  } catch (err) {
    console.error(`Error while deleting question`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  getAll,
  create,
  update,
  remove
};