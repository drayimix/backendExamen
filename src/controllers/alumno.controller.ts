import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Alumno, AlumnoI } from '../models/alumno';

export class AlumnoController{

    public async getAllAlumno(req: Request, res:Response){
        try {
            const alumno: AlumnoI[] = await Alumno.findAll({})
            res.status(200).json({alumno})
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async getOneAlumno(req: Request, res:Response){
        const { id:idParam } = req.params
        try{
            const alumno: AlumnoI | null = await Alumno.findOne({
                where: {
                    id: idParam,
                }
            })
            if(alumno){
                res.status(200).json({alumno})
            }else return res.status(300).json({msg: 'El alumno no existe'})
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async crateAlumno(req: Request, res:Response){
        const {
            nombreAlumno,
            apellidoAlumno,
            edadAlumno,
            generoAlumno,
            programaAlumno
        }=req.body;

        try{
            let body: AlumnoI = {
                nombreAlumno,
                apellidoAlumno,
                edadAlumno,
                generoAlumno,
                programaAlumno
            }
            const alumno: AlumnoI | null = await Alumno.create({...body})
            res.status(200).json({alumno})
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async updateAlumno(req: Request, res:Response){
        const { id:pk } = req.params;
        const {
            id,
            nombreAlumno,
            apellidoAlumno,
            edadAlumno,
            generoAlumno,
            programaAlumno
        }=req.body;

        try{
            let body: AlumnoI = {
                nombreAlumno,
                apellidoAlumno,
                edadAlumno,
                generoAlumno,
                programaAlumno
            }

            const alumnoExist: AlumnoI | null = await Alumno.findByPk(pk);

            if(!alumnoExist) return res.status(500).json({msg: 'El alumno no existe'})
            await Alumno.update(body, {
                where: {
                    id:pk
                }
            });
        }catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
        const alumno: AlumnoI | null = await Alumno.findByPk(pk);
        if(alumno) return res.status(200).json({alumno})
    }

    public async deleteAlumno(req: Request, res:Response){
        const { id:pk } = req.params;
        try{
            const alumnoExist: AlumnoI | null = await Alumno.findByPk(pk);
            if(!alumnoExist) return res.status(500).json({msg: 'El alumno no existe'})
            await Alumno.destroy({
                where: {
                    id:pk
                }
            })
            res.status(200).json({msg: 'alumno eliminado'})
        } catch (error){
            res.status(500).json({msg: "Error Internal"})
        }
    }
}