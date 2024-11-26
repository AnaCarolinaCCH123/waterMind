// src/interfaces/ph.ts
export interface Ph {
  id?: number; // ID de la lectura, opcional al crear nuevas lecturas
  valor_ph: number; // Valor del pH registrado
}

export interface PaginatedPh {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: Ph[];
}
