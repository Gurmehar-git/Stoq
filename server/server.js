const express = require("express");
const app = express();

const PORT = 4000;

app.get('/api/health', (req, res) => {
    res.json({ status: "ok" });
})

app.listen(PORT, () => {
    console.log(`server running on PORT-${PORT}`);
})