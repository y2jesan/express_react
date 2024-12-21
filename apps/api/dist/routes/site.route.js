import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.render('index', { title: 'Home', layout: '../layouts/site-layout' });
});
export default router;
//# sourceMappingURL=site.route.js.map