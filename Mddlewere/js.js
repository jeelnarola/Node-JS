const post = (req, res, next) => {
  const  {email}  = req.body;
  console.log(email);
  if (email == "jeel@gmail.com") {
    next();
  } else {
    res.send("erroe");
  }
};

module.exports = post;
