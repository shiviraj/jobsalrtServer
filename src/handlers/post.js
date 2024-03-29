const Post = require('./wrapper/post');

const serveAllPost = async (req, res) => {
  const post = await Post.getAllPosts(req.params.pageNo);
  res.send(post);
};

const serveAllJobsPageCount = async (req, res) => {
  const count = await Post.getAllPostsPageCount();
  res.send({ count });
};

const servePost = async (req, res) => {
  try {
    const post = await Post.findByURL(req.params.url);
    if (!post) res.setStatus(404);
    res.send(post);
  } catch (e) {
    res.sendStatus(500);
  }
};

const serveLatestJobs = async (req, res) => {
  const post = await Post.getLatestJobs();
  res.send(post);
};

const serveAdmitCards = async (req, res) => {
  const post = await Post.getAdmitCards();
  res.send(post);
};

const serveResults = async (req, res) => {
  const post = await Post.getResults();
  res.send(post);
};

const serveAnswerKey = async (req, res) => {
  const post = await Post.getAnswerKey();
  res.send(post);
};

const serveSyllabus = async (req, res) => {
  const post = await Post.getSyllabus();
  res.send(post);
};

const serveAdmission = async (req, res) => {
  const post = await Post.getAdmission();
  res.send(post);
};

const serveOthers = async (req, res) => {
  const post = await Post.getOthers();
  res.send(post);
};

const serveUpcoming = async (req, res) => {
  const post = await Post.getUpcoming();
  res.send(post);
};

const serveExpiringSoon = async (req, res) => {
  const post = await Post.getExpiringSoon();
  res.send(post);
};

const serveList = async (req, res) => {
  const list = await Post.getList(req.body.key);
  res.send(list);
};

const servePostsBy = async (req, res) => {
  const posts = await Post.findPostsBy(req.body);
  res.send(posts);
};

const servePostsByPageCount = async (req, res) => {
  const count = await Post.findPostsByPageCount(req.body);
  res.send({ count });
};

const serveSearchedPosts = async (req, res) => {
  const posts = await Post.findSearchedPosts(req.body);
  res.send(posts);
};

const serveSearchedPostsPageCount = async (req, res) => {
  const count = await Post.findSearchedPostsPageCount(req.body.value);
  res.send({ count });
};

module.exports = {
  servePost,
  serveAllPost,
  serveAllJobsPageCount,
  serveLatestJobs,
  serveAdmitCards,
  serveResults,
  serveAnswerKey,
  serveSyllabus,
  serveAdmission,
  serveOthers,
  serveUpcoming,
  serveExpiringSoon,
  serveList,
  servePostsBy,
  servePostsByPageCount,
  serveSearchedPosts,
  serveSearchedPostsPageCount,
};
