import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

import { Asignatura } from "./asignatura";

export class Docente extends Model {
    public nombreDocente!: string;
    public tipoVinculacion!: string;
    public programa!: string;
    public facultad!: string;
    public asignaturaId!: number;
}


export interface DocenteI {
    nombreDocente: string;
    tipoVinculacion: string;
    programa: string;
    facultad: string;
    asignaturaId: number;
}

Docente.init(
    {
        nombreDocente: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipoVinculacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        programa: {
            type: DataTypes.STRING,
            allowNull: false
        },
        facultad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        asignaturaId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Asignatura,
                key: 'id',
            }
        }
    },
    {
      tableName: "docentes",
      sequelize: database,
      timestamps: true
    }
);

// Asociación entre docente y asignatura
Docente.belongsTo(Asignatura, { foreignKey: "asignaturaId", as: 'asignatura'}); // Agrega una columna asignaturaId en la tabla docentes
// agregamos la relacion inversa de uno a muchos
Asignatura.hasMany(Docente, { foreignKey: "asignaturaId" }); // Agrega una columna asignaturaId en la tabla docentes