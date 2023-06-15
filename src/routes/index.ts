import { AlumnoRoutes } from "./alumno";
import { DocenteRoutes } from "./docente";
import { AsignaturaRoutes } from "./asignatura";

export class Routes {
    public docenteRoutes: DocenteRoutes = new DocenteRoutes();
    public alumnoRoutes: AlumnoRoutes = new AlumnoRoutes();
    public asignaturaRoutes: AsignaturaRoutes = new AsignaturaRoutes();
}