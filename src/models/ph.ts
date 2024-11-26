import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { PaginatedPh, Ph } from "../interfaces/ph";

// Obtener todas las lecturas de pH con paginación
export const findAllPh = async (
  limit: number,
  offset: number
): Promise<PaginatedPh> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM LecturasPH LIMIT ? OFFSET ?",
    [limit, offset]
  );

  // Consulta para obtener el total de registros
  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM LecturasPH"
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;

  // Calcular el total de páginas
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Ph[],
  };
};

// Insertar una nueva lectura de pH
export const insertPh = async (reading: Ph): Promise<Ph> => {
  const { valor_ph } = reading;

  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO LecturasPH (valor_ph) 
     VALUES (?)`,
    [valor_ph]
  );

  const { insertId } = result;

  return { id: insertId, valor_ph };
};

// Actualizar una lectura de pH existente
export const updatePh = async (id: number, reading: Ph): Promise<Ph> => {
  const { valor_ph } = reading;

  await pool.query<ResultSetHeader>(
    `UPDATE LecturasPH
     SET valor_ph = ?
     WHERE id = ?;`,
    [valor_ph, id]
  );

  return { id, valor_ph };
};

// Eliminar una lectura de pH por ID
export const deletePh = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>(`DELETE FROM LecturasPH WHERE id = ?`, [
    id,
  ]);

  return id;
};
