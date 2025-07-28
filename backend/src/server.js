import { mongo } from 'mongoose';
import connectDB from './config/db.js';
import notesRoutes from './routes/notesRoutes.js';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.MONGO_URI);
const app = express();
app.use("/api/notes", notesRoutes);
connectDB()
/*app.get('/api/notes', (req, res) => {
    res.send("you 10 got thescdewff  10 notes");
})
app.post('/api/notes', (req, res) => {
    res.status(201).send("Note created successfully");
})
app.put('/api/notes/:id', (req, res) => {
    res.status(200).send(` updated successfully`);

})
app.delete('/api/notes/:id', (req, res) => {
    res.status(200).send(`Note deleted successfully`);
})*/
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});