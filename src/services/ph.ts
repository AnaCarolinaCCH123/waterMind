import { Ph } from "../interfaces/ph"; // Interface para lecturas
import { findAllPh, insertPh, updatePh, deletePh } from "../models/ph";

// Obtener todas las lecturas de pH con paginación
export const findAll = async (limit: number, offset: number) => {
  return await findAllPh(limit, offset);
};

// Insertar una nueva lectura de pH
export const insert = async (reading: Ph) => {
  return await insertPh(reading);
};

// Actualizar una lectura de pH existente
export const update = async (id: number, reading: Ph) => {
  return await updatePh(id, reading);
};

// Eliminar una lectura de pH por su ID
export const deleteById = async (id: number) => {
  return await deletePh(id);
};
