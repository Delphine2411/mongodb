const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect('mongodb+srv://delphine:delphine@delphinecluster.u0gr9.mongodb.net/taskDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connecté"))
    .catch(err => console.error("Erreur de connexion", err));

// Modèle de tâche
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
});

const task = mongoose.model("Task", taskSchema);

// Création d'une tâche
app.post("/tasks", async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Ajoute une nouvelle tâche." });
        }
        const newTask = new task({ title });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Lire la liste des tâches
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Lire une tâche spécifique
app.get("/tasks/:id", async (req, res) => {
    try {
        const task = await task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ error: "Tâche non trouvée." });
        }
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Modifier une tâche
app.put("/tasks/:id", async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Veuillez fournir un titre." });
        }
        const nouvoTask = await task.findByIdAndUpdate(req.params.id, { title }, { new: true });
        if (!nouvoTask) {
            return res.status(404).json({ error: "Tâche non trouvée." });
        }
        res.json(nouvoTask);
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ error: "Tâche non trouvée." });
        }
        res.json({ message: "Tâche supprimée avec succès." });
    } catch (err) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// Lancer le serveur
app.listen(PORT, () => console.log(`API disponible sur http://localhost:${PORT}`));
