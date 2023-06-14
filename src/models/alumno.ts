import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Alumno extends Model{
    public nombreAlumno!: string;
    public apellidoAlumno!: string;
    public edadAlumno!: number;
    public generoAlumno!: string;
    public programaAlumno!: string;
}

export interface AlumnoI{
    nombreAlumno: string;
    apellidoAlumno: string;
    edadAlumno: number;
    generoAlumno: string;
    programaAlumno: string;
}

Alumno.init(
    {
        nombreAlumno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidoAlumno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edadAlumno: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        generoAlumno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        programaAlumno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "alumnos",
        sequelize: database,
        timestamps: true
    }
)