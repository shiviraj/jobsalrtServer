const express = require('express');
const {
  servePost,
  serveAllPost,
  serveLatestJobs,
  serveAdmitCards,
  serveResults,
  serveAnswerKey,
  serveSyllabus,
  serveAdmission,
  serveList,
  servePostsBy,
} = require('../handlers/post');

const route = new express.Router();

route.get('/allJobs', serveAllPost);
route.get('/latestJobs', serveLatestJobs);
route.get('/admitCard', serveAdmitCards);
route.get('/results', serveResults);
route.get('/answerKey', serveAnswerKey);
route.get('/syllabus', serveSyllabus);
route.get('/admission', serveAdmission);
route.get('/post/:id', servePost);
route.post('/getList', serveList);
route.post('/postsBy', servePostsBy);

module.exports = route;
