import { Request, Response, Application, Router } from "express";

import { AsignaturaController } from "../controllers/asignatura";

export class AsignaturaRoutes{
    public asignaturaController: AsignaturaController = new AsignaturaController();
        public routes(app: Application): void {
        app.route("/asignaturas").get(this.asignaturaController.getAllAsignatura)
        app.route("/asignaturas/:id").get(this.asignaturaController.getOneAsignatura)
    }
}