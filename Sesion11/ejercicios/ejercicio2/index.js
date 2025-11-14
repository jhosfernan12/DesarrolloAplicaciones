const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

// SECRET 
const JWT_SECRET = "keysecreta12345"; 
// Tiempo de expiración del token 
const TOKEN_EXPIRATION = "1h";

// Datos temporales (simula una Base de Datos)
const users = 
[
  { id: 1, username: "pacheco", password: "1234", role: "user" },
  { id: 2, username: "jimena", password: "4321", role: "admin" }
];

// Endpoint público: login
app.post("/login", (req, res) => 
    {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ message: "username and password required" });

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const payload = { id: user.id, username: user.username, role: user.role };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRATION });

    res.json({ token, expiresIn: TOKEN_EXPIRATION });
});

// Middleware: validar JWT
function authenticateToken(req, res, next) 
{
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  // Esperamos: "Bearer <token>"
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer")
    return res.status(401).json({ message: "Invalid Authorization header format" });

  const token = parts[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => 
    {
        if (err) 
        {
        // err.name puede ser "TokenExpiredError" o "JsonWebTokenError"
        if (err.name === "TokenExpiredError")
            return res.status(401).json({ message: "Token expired" });
        return res.status(401).json({ message: "Token invalid" });
        }
        // Guardamos los datos decodificados en req.user para usar en rutas
        req.user = decoded;
        next();
  });
}

// Rutas protegidas (usando el middleware)
app.get("/profile", authenticateToken, (req, res) => 
{
  res.json({
    message: "Profile data (protected)",
    user: req.user
  });
});

app.get("/admin", authenticateToken, (req, res) => 
{
  if (req.user.role !== "admin") 
    {
    return res.status(403).json({ message: "Forbidden: admin only" });
  }
  res.json({
    message: "Admin data (protected)",
    user: req.user
  });
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Auth API listening on http://localhost:${PORT}`);
});
