const express = require('express');
const app = express();
app.get('/api/notes', (req, res) => {
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
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});