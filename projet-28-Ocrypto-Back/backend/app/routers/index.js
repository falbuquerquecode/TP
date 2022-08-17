const express = require('express');

const router = express.Router();

const userRouter = require('./user');
const homepageRouter = require('./homepage');
const articleRouter = require('./article');
const lexiconRouter = require('./lexicon');
const levelRouter = require('./level');
const challengeRouter = require('./challenge');
const questionRouter = require('./question');
const answerRouter = require('./answer');
const rewardRouter = require('./reward');
const cryptoRouter = require('./crypto');
const recoveryPasswordRouter = require('./recoveryPassword');

router.use(homepageRouter);
router.use(userRouter);
router.use(articleRouter);
router.use(lexiconRouter);
router.use(levelRouter);
router.use(challengeRouter);
router.use(questionRouter);
router.use(answerRouter);
router.use(rewardRouter);
router.use(cryptoRouter);
router.use(recoveryPasswordRouter);

module.exports = router;
