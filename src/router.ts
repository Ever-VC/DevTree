import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/nosotros', (req, res) => {
    res.send('About Us');
});

router.get('/blog', (req, res) => {
    res.send('Blog');
});

export default router;
