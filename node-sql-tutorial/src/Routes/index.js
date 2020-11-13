"use strict";

const api = require( "./api" );
const auth = requiere("./auth")
module.exports.register = async server => {
   // register api routes
   await api.register( server );

   server.route( {
       method: "GET",
       path: "/",
       handler: async ( request, h ) => {
           return h.view("index", {titlw: "Home", message: "Welcome!"});

       },
       optiona: {
           auth: {
               mode: "try"
           }
       }
   } );
   server.route( {
       method: "GET", 
       path: "/{param*}",
       handler: {
           directory: {
               path: "dist"
           }
       }
   })
};