const question = require("../models/question.model.js")

async function get(req, res, next) {
  try {
    // console.log(req.params.id)
    const allQuestions = await question.find({})
    res.send(allQuestions)
  } catch (err) {
    console.error(`Error while getting questions`, err.message);
    next(err);
  }
}

async function getAll(req, res, next) {
  try {
    const allQuestions = await question.find({})
    res.send(allQuestions)
  } catch (err) {
    console.error(`Error while getting questions`, err.message);
    next(err);
  }
}

async function getRandom(req, res, next) {
  try {
    // TODO: query data from user about answerd questions
    const randomQuestion = await question.aggregate([
      { $match: { 'questionContent': { '$nin': ['aaaa', 'bbbb', 'ccc'] } } },
      { $sample: { size: 1 } }
    ])
    res.send(randomQuestion)
  } catch (err) {
    console.error(`Error while getting questions`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    console.dir(req.body, { depth: null })

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
    console.log(req.params.id, req.body)
    question.findByIdAndUpdate(req.params.id, req.body, {returnDocument:'after'}, (err, docs) => {
      if (err) {
        res.send(err)
      }
      else {
        res.send(docs);
      }
    })

  } catch (err) {
    console.error(`Error while updating question`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    console.log(req.params.id, req.body)
    question.findByIdAndDelete(req.params.id, (err) => {
      if (err) {
        res.send(err)
      }
      else {
        res.send("deleted");
      }
    })
  } catch (err) {
    console.error(`Error while deleting question`, err.message);
    next(err);
  }
}

module.exports = {
  get,
  getAll,
  getRandom,
  create,
  update,
  remove
};