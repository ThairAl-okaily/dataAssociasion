

const mongoose = require("mongoose");
const Post = require("./models/post");
const User = require("./models/user");





mongoose.connect("mongodb://localhost/embeded_demo_2", {useNewUrlParser: true});

Post.create({
    title: "how to cock salmon p33",
    content: "get it ready p33"
},(err, post) =>{
        if(err) {
            console.log(err);
        }
        else {
            User.findOne({name: "mary"}, (er, fUser) =>{
                if(er) {
                    console.log(er);}
                    else {
                        fUser.posts.push(post);
                        fUser.save((er2, data) =>{
                            if(er2) {
                                console.log(er2);}
                                else {console.log(data);}
                            });
                    }
                });
        }
    });


User.findOne({name: "mary"}).populate("posts").exec((err, usr) =>{
            if(err) {
                console.log(err);
            }
            else {
                console.log(usr);
            }
            });