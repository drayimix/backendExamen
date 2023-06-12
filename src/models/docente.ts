import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Docente extends Model {
    public nombreDocente!: string;
    public tipoVinculacion!: string;
    public programa!: string;
    public facultad!: string;
}


export interface DocenteI {
    nombreDocente: string;
    tipoVinculacion: string;
    programa: string;
    facultad: string;
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
        }
    },
    {
      tableName: "docentes",
      sequelize: database,
      timestamps: true
    }
  );