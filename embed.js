const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/embeded_demo", {useNewUrlParser: true});


var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Post = mongoose.model("Post", postSchema);


var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
const User = mongoose.model("User", userSchema);




let newUser = new User({
    email: "mary-poter@lol.hah",
    name: "mary"
});
newUser.posts.push({
    title: "how to imply black magic",
    content:"i dont know, let me know when u get it "
});

newUser.save((err, user) =>{
    if(err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});


let newPost = new Post({
    title: "apples curse",
    content: "newten law"
});
newPost.save((err, post) =>{
    if(err) {
        console.log(err);
    }
    else {
        console.log(post);
    }
});


User.find({name: "mary"}, (err, usr) => {
    if(err){
        console.log(err);
    }
    else {
        usr.posts.push({
        title: "kill thee cat",
        content:"ok, buttt i am serial killer = u next"
        });

        usr.save((er, ue) =>{
            if(er) {
                console.log(er);
            }
            else {
                console.log(ue);
            }
        });
    }
});