import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Asignatura, AsignaturaI } from '../models/asignatura';

export class AsignaturaController{
    public async getAllAsignatura(req: Request, res:Response){
        try{
            const asignatura: AsignaturaI[] = await Asignatura.findAll({})
            res.status(200).json({asignatura})
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async getOneAsignatura(req: Request, res:Response){
        const { id:idParam } = req.params
        try{
            const asignatura: AsignaturaI | null = await Asignatura.findOne({
                where: {
                    id: idParam,
                }
            })
            if(asignatura){
                res.status(200).json({asignatura})
            }else return res.status(300).json({msg: ' no existe'})
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}