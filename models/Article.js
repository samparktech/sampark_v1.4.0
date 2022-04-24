const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type : String
    },
    post : {
        type : String
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    postedBy:{
        type: String
    },
    comments : {
        type : [{commentedBy : String, commentMsg : String, avatarImage : String}],
    },
    likes : {
        type : [{likedBy : String}],
        
    },
    dislikes : {
        type : [{dislikedBy : String}]
    },
    articleImage : {
        type : String,
        required : false,
        unique : false
    },
    dataType:{
        type : String
    } 
});

const Article = mongoose.model('Articles', ArticleSchema);

module.exports = Article;