import { Request, Response, Application, Router } from "express";

import { AlumnoController } from "../controllers/alumno.controller";

export class AlumnoRoutes{
    public alumnoController:AlumnoController = new AlumnoController();

    public routes(app: Application): void {
        app.route("/alumnos").get(this.alumnoController.getAllAlumno)
        app.route("/alumnos/:id").get(this.alumnoController.getOneAlumno)
        app.route("/alumnos").post(this.alumnoController.crateAlumno)
        app.route("/alumnos/:id").put(this.alumnoController.updateAlumno)
        app.route("/alumnos/:id").delete(this.alumnoController.deleteAlumno)
    }
}