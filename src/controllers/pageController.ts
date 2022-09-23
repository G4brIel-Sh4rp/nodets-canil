import { Request, Response } from "express";
import { createMenuObject } from "../helper/createMenuObject";
import { Pet } from "../models/Pet";

export const home = (req: Request, res: Response)=>{
    const list = Pet.getAll()

    res.render('pages/main', {
        menu: createMenuObject('all'),
        banner:{
            title: 'Todos Animais',
            background: 'allanimals.jpg'
        },
        data: list
    });
}
export const dogs = (req: Request, res: Response)=>{
    const list = Pet.getFromType('dog');

    res.render('pages/main', {
        menu: createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        data: list
    });
}
export const cats = (req: Request, res: Response)=>{
    const list = Pet.getFromType('cat');

    res.render('pages/main', {
        menu: createMenuObject('cat'),
        banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        data: list
    });
}
export const fishes = (req: Request, res: Response)=>{
    const list = Pet.getFromType('fish');

    res.render('pages/main', {
        menu: createMenuObject('fish'),
        banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        data: list
    });
}