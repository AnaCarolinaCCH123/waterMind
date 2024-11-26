import { Request, Response } from "express";

import { deleteById, findAll, insert, update } from "../services/ph";
import { Ph } from "../interfaces/ph";

// Obtener todos los cursos
export const getPh = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const offset = (page - 1) * limit;
    const ph = await findAll(limit, offset);
    res.status(200).json(ph);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener dato", error });
  }
};
export const createPh = async (req: Request, res: Response) => {
  try {
    const ph: Ph = req.body;
    await insert(ph);
    res.status(201).json({ message: "Dato creado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear dato", error });
  }
};
export const updatePh = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const ph: Ph = req.body;
    await update(id, ph);
    res.status(201).json({ message: "Actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar ", error });
  }
};
export const deletePh = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar", error });
  }
};
