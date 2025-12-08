import userDAO from "../daos/users.dao.js";
import bcrypt from "bcryptjs";
const saltRounds = 10;

class UserController {

    createUser = async (req, res) => {
        const {name, lastname, email, password, role, address} = req.body;
            if(!name || !lastname || !email || !password || !role || !address){return res.status(400).json("Faltan campos")};
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const userData = {
            ...req.body,
            password: hashedPassword 
            }
            const user = await userDAO.create(userData);
            res.status(201).json("Usuario creado correctamente, ya puede iniciar sesión");
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

     getUsers = async (req, res) => {
        try {
            const users = await userDAO.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    getUser = async (req, res) => {
        try {
            const user = await userDAO.findById(req.params.id_user);
            if (!user) return res.status(404).json({ error: "User not found" });
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    updateUser = async (req, res) => {
        try {
            const user = await userDAO.update(req.params.id_user, req.body);
            res.json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    deleteUser = async (req, res) => {
        try {
            await userDAO.delete(req.params.id_user);
            res.json({ message: "User deleted" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    login = async (req, res) => { 
    try {
        const { email, password } = req.body;
        
        console.log(`[AUTH] Solicitud de Login recibida:`);
        console.log(`  Email: ${email}`);
        console.log(`  Contraseña recibida: ${password ? 'Sí' : 'No'}`);

        const user = await userDAO.findByEmail(email);
        
        if (!user) {
            console.log(`[AUTH FAILED] Usuario con email ${email} NO encontrado.`);
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        
        console.log(`[AUTH] Usuario encontrado: ${user.name} (${user.role}).`);
        

        const validPassword = await bcrypt.compare(password, user.password);
        
        
        if (!validPassword) {
            console.log(`[AUTH FAILED] Contraseña NO válida para ${email}.`);
            return res.status(401).json({ error: "Credenciales inválidas." });
        }     
        console.log(`[AUTH SUCCESS] Login exitoso para ${email}.`);
        
        res.json({
            message: "Login exitoso",
            user: {
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(`[AUTH ERROR] Error interno al procesar login:`, error.message);
        res.status(500).json({ error: error.message });
    }
}

}

export default new UserController();
