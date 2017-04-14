var mongoose = require('mongoose');
var User  = require('../models/model');

module.exports.findAll =function(req, res, next) {

    User.find({}).exec(function(err,data){
       res.json(data);
    });
}

module.exports.find =function(req, res, next) {
    User.findOne( { login : req.params.login},function(err, user){
        if(err){
            res.json(err);
        }
        else {
            res.json(user);
        }
    } );
}

module.exports.addUser =function(req, res, next) {
var user = new User(req.body) ;
    user.save(function(err, user){
        if(err){
            res.json(err);
        }
        else {
            res.json(user);
        }
    } );
}

module.exports.editUser =function(req, res, next) {

    var query = {"login":req.body.login};
    User.findOneAndUpdate(query, req.body, {upsert:true}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
    });

}

module.exports.deleteUser =function(req, res, next) {

    User.findByIdAndRemove( req.params.id, function(err, user){
        if(err){
            res.json(err);
        }
        else {
            res.json(user);
        }
    } );
}
module.exports.remove =function(req, res, next) {
    User.remove(function(){

        res.json({success :"true"});
    })


}