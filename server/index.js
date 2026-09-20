```js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    name: "BuildMind",
    status: "running"
  });
});

app.get("/", (req, res) => {
  res.json({
    name: "BuildMind",
    message: "AI Builder Platform"
  });
});

app.listen(PORT, () => {
  console.log(`BuildMind server running on port ${PORT}`);
});
```
