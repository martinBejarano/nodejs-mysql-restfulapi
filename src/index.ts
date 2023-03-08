import app from "./app.js";
import { PORT } from './config.js';

app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});