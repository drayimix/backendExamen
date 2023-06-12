import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Asignatura extends Model{
    public nameAsignatura!: string;
    public creditosAsignatura!: number;
}

export interface AsignaturaI {
    nameAsignatura: string;
    creditosAsignatura: number;
}

Asignatura.init (
    {
        nameAsignatura: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creditosAsignatura: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    },
    {
        tableName: "asignaturas",
        sequelize: database,
        timestamps: true 
    }
)