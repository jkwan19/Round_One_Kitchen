const express = require('express');

const Controller = require('./reviews-controller');

const router = express.Router();

router.post('/reviews', Controller.createReview);
router.put('/reviews/:id', Controller.updateReview);
router.delete('/reviews/:id', Controller.deleteReview);
router.get('/reviews/:id', Controller.getReviewById);
router.get('/reviews', Controller.getReviews);

module.exports = router;