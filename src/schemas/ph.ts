import { z } from "zod";

// Esquema para validar una lectura de pH
export const phSchema = z.object({
  id: z.number().optional(),
  valor_ph: z
    .number()
    .min(0, { message: "El valor de pH debe ser mayor o igual a 0" })
    .max(14, { message: "El valor de pH no puede ser mayor a 14" }),
});
