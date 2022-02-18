"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConnect = void 0;
//import * as mongoose from 'mongoose';
const mongoose = require('mongoose');
class mongoConnect {
    static connection() {
        //const mongoDBCon= process.env.MONGODB_URL || '';
        //const connectionString = 'mongodb+srv://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PW + '@<REDACTED_APP>-y1llv.mongodb.net/<REDACTED_APP>';
        //mongoose.connect("mongodb://localhost/EcomData",{useNewUrlParser:true});
        mongoose.connect("mongodb+srv://chandra:chandra123@blockchain.iri9f.mongodb.net/Ecommerce?retryWrites=true&w=majority", { useNewUrlParser: true });
        mongoose.connection
            .once('open', () => console.log("DB Connected"));
    }
}
exports.mongoConnect = mongoConnect;
