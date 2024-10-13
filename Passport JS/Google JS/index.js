const express= require('express')
const passport=require('passport')
const session=require('express-session')

const app=express()
app.use(session({secret:"Google"}))

const GoogleSt=require('passport-google-oauth20').Strategy

passport.use(new GoogleSt({
    clientID: "85592513106-rgpnsq18l1754247rc73lq7a77kbtne4.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:8090/auth/google/callback"
},(accessToken, refreshToken, profile, cb)=>{
    return cb(null,profile)
}
))

passport.serializeUser((user,done)=>{
    return done(null,user)
})
passport.deserializeUser((user,done)=>{
    return done(null,user)
})


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),(req, res)=> {
    // Successful authentication, redirect home.
    res.send('Login');
  });

app.listen(8090,()=>{
    console.log("server start");
})