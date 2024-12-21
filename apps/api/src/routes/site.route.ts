import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Qtec Solutions', layout: '../layouts/site-layout' });
});

export default router;
