import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Docente, DocenteI } from '../models/docente';
import { Asignatura } from '../models/asignatura';

export class DocenteController {

    public async getAllDocente(req: Request, res:Response){
        try {
            const docente: DocenteI[] = await Docente.findAll({
                include: {
                    model: Asignatura,
                    as: 'asignatura',
                    attributes: ['nameAsignatura']
                }
            })
            res.status(200).json({docente})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async getOneDocente(req: Request, res:Response){
        const { id:idParam } = req.params
        try{
            const docente: DocenteI | null = await Docente.findOne({
                where: {
                    id: idParam,
                }
            })
            if(docente){
                res.status(200).json({docente})
            }else return res.status(300).json({msg: 'El docente no existe'})
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async crateDocente(req: Request, res:Response){
        const {
            nombreDocente,
            tipoVinculacion,
            programa,
            facultad
        }=req.body;

        try{
            let body: DocenteI = {
                nombreDocente,
                tipoVinculacion,
                programa,
                facultad
            }
            const docente: DocenteI | null = await Docente.create({...body})
            res.status(200).json({docente})
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async updateDocente(req: Request, res:Response){
        const { id:pk } = req.params;
        const {
            id,
            nombreDocente,
            tipoVinculacion,
            programa,
            facultad
        }=req.body;

        try{
            let body: DocenteI = {
                nombreDocente,
                tipoVinculacion,
                programa,
                facultad
            }

            const docenteExist: DocenteI | null = await Docente.findByPk(pk);

            if(!docenteExist) return res.status(500).json({msg: 'El docente no existe'})
            await Docente.update(body, {
                where: {
                    id:pk
                }
            });
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
        const docente: DocenteI | null = await Docente.findByPk(pk);
        if(docente) return res.status(200).json({docente})
    }

    public async deleteDocente(req: Request, res:Response){
        const { id:pk } = req.params;
        try{
            const docenteExist: DocenteI | null = await Docente.findByPk(pk);
            if(!docenteExist) return res.status(500).json({msg: 'El docente no existe'})
            await Docente.destroy({
                where: {
                    id:pk
                }
            })
            res.status(200).json({msg: 'Docente eliminado'})
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}
