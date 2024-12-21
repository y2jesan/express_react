import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import session from 'express-session';
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
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Set the views directory to the website folder
app.set('views', path.join(__dirname, '../..', 'website', 'pages'));

// Set the layout file
app.set('layout', path.join(__dirname, '../..', 'website', 'layouts', 'site-layout'));

app.use(express.static(path.join(__dirname, '../..', 'website')));

app.use(
  session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

// Import and use site routes
import siteRoutes from './routes/site.route.js';
app.use('/', siteRoutes);

const router = express.Router();
router.get('/get-my-name', (req, res) => {
  res.json({ name: 'Jesan' });
});

app.use('/api', router);

// Handle /admin/* routes with React client
app.use(express.static(path.join(__dirname, '../..', 'client', 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../..', 'client', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
