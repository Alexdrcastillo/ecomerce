import { connectDB } from "./db.js";

import app from "./app.js";

const port = 4000;

connectDB();

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
