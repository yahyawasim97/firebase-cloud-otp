const admin = require('firebase-admin');

module.exports = function(req,res){
    //Verify user provide phone
    if(!req.body.phone){
        return res.status(422).send({error:'Bad Input'})
    }
    
    //Format Phone
    const phone = String(req.body.phone).replace(/[^\d]/g,"");


    //Create a new user using phone
    admin.auth().createUser({uid:phone})
    .then(user=>res.send(user))
    .catch(err=>res.status(422).send({error:err}))

    //Respond to the user
}