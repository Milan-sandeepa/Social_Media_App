import { Request, RequestHandler, Response } from "express";

export default class UserController{
    createUser:RequestHandler = async (
        req:Request,
        res:Response
    ):Promise <Response>=>{
        // create operation
        console.log("awa badu");
        return res;
        
    };

    signIn = async (
        req:Request,
        res:Response
        ):Promise <Response> =>{
            // create operation
            console.log(res);
            return res;
        }
}