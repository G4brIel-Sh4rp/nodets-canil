import { Request, Response } from "express";
import { createMenuObject } from "../helper/createMenuObject";
import { Pet } from "../models/Pet";

export const search = (req: Request, res: Response)=>{
    const name = req.query.q as string;
    
    const list = Pet.getFromName(name);

    res.render('pages/main',{
        menu: createMenuObject(''),
        data:list,
        query:name,
    } )
}