import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import usersRoutes from "./src/routes/users.routes.js";
import reportsRoutes from "./src/routes/reports.routes.js";
import { connectDB} from "./src/config/database.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Conexion a la base de datos
connectDB();

//  Rutas

app.use("/guardianwater/users", usersRoutes);
app.use("/guardianwater/reports", reportsRoutes);
app.get("/", (req, res) => {
  res.send("Hola soy el inicio");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
