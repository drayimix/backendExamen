import { Request, Response, Application, Router } from "express";

import { DocenteController } from "../controllers/docente";

export class DocenteRoutes {
    public docenteController: DocenteController = new DocenteController();

    public routes(app: Application): void {
        app.route("/docentes").get(this.docenteController.getAllDocente)
        app.route("/docentes/:id").get(this.docenteController.getOneDocente)
        app.route("/docentes").post(this.docenteController.crateDocente)
        app.route("/docentes/:id").put(this.docenteController.updateDocente)
        app.route("/docentes/:id").delete(this.docenteController.deleteDocente)
    }
}