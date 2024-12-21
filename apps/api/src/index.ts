import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('trust proxy', true);

app.use(cors());

app.use(express.static(path.join(__dirname, '../..', 'client', 'dist')));

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});
router.get('/get-my-name', (req, res) => {
  res.json({ name: 'Jesan' });
});

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'client', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
