import app from "./app.js";
import { DB_HOST, PORT } from './config.js';
app.listen(PORT, () => {
    console.log(`Server is running at http://${DB_HOST}:${PORT}`);
});
