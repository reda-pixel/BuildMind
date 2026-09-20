```jsx
import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>BuildMind</h1>
      <p>AI Builder Platform</p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
