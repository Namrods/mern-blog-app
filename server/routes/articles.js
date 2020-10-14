const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

// Request get all Articles
router.get('/', (req, res) => {
    Articles.find()
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Request to add new Article
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorName: req.body.authorName
    })

    newArticle.save()
        .then(() => res.json("The new Article has been added successfully."))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

// Request to find Article by ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// Request find Article by Id and update
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => {
            article.title = req.body.title,
            article.article = req.body.article,
            article.authorName = req.body.authorName

            article.save()
                .then(() => res.json("The Article has been updated successfully."))
                .catch(err => res.status(400).json(`Error: ${err}`))
        })
        .catch(err => res.status(400).json(`Error: ${err}`))
})

// Request find Article by Id and delete
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
        .then(() => res.json("the Article has been deleted successfully."))
        .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;