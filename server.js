import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conectarDB } from "./config/database.js";
import ruletaRoutes from "./routes/ruletaRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

conectarDB();


// Rutas
app.use("/ruleta", ruletaRoutes);

// Exportar app para Supertest
export default app;


  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);

})
