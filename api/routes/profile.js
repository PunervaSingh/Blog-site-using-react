const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//GET POST
router.get("/:id", async(req, res)=>{
    try{
        const post = await User.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;