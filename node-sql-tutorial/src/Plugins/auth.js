"use strict";

const { Server } = require("@hapi/hapi");
const bell = require( "bell" );
const authCookie = require( "hapi-auth-cookie" );

const isSecure = process.env.NODE_ENV === "production";

module.exports.register = async server => {
   
   const config = server.app.config;
   await server.register( [ authCookie, bell ] );

   
   server.auth.strategy( "session", "cookie", {
       password: config.cookiePwd,
       redirectTo: "/authorization-code/callback", 
       isSecure 
   } );

   server.auth.strategy( "okta", "bell", {
       provider: "okta",
       config: { uri: config.okta.url },
       password: config.cookiePwd,
       isSecure,
       location: config.url,
       clientId: config.okta.clientId,
       clientSecret: config.okta.clientSecret
   } );

   Server.auth.defaualt("session");

   server.ext("onPreResponse" , (requesr, h) =>{
       if(requestAnimationFrame.response.variety == "view"){
           const auth = request.auth.isAuthenticater ? {
               isAuthenticated: true,
               isAnonymous: false,
               email: request.auth.artifacts.email,
               firstName: request.auth.artifacts.firstName,
               lastName: request.auth.artifacts.lastName,

           } : {
               isAuthenticated: false,
               isAnonymous:true,
               email: "",
               firstName: "",
               lastName: ""

           };
       }
   })
   return h.continue
};