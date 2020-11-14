"use strict";

const ejs = require( "ejs" );
const inert = require( "inert" );
const { join } = require( "path" );
const vision = require( "vision" );

const auth = require( "./auth" );
const sql = require( "./sql" );

const isDev = process.env.NODE_ENV !== "production";

module.exports.register = async server => {

    await server.register( [ inert, sql, vision ] );

   server.views({
       engines: {ejs},
       relativeTo: __dirname,
       path: "../templates",
       layout: true


    })

    const filePath = join( process.cwd(), "src" );
   server.views( {
       engines: { ejs },
       relativeTo: filePath,
       path: "views",
       layout: true
   } );

   await auth.register( server );
};