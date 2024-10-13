const model = require("../Models/user.Schema")

const localS=require("passport-local").Strategy

const local=(passport)=>{

    passport.use(new localS(async(username,password,done)=>{
        let data=await model.findOne({username:username})
        if(!data){
            return done(null,false)
        }
        if(data.password!=password){
            return done(null,false)
        }
        return done(null,data)
    }))

    passport.serializeUser((data,done)=>{
        return done(null,data.id)
    })
    passport.deserializeUser(async(id,done)=>{
        let user=await model.findById(id)
        return done(null,user)
    })

}
module.exports=local