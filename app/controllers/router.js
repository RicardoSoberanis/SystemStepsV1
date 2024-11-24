const express = require("express");
const path = require('path');
const productRouter = require('../routes/users');
const adminProductRouter = require('../routes/projects');

const router = express.Router();

function validateAdmin(req, res, next) {
    const authHeader = req.headers['x-auth'];
    if (authHeader !== 'admin') {
        return res.status(403).json({ error: 'Acceso no autorizado, no se cuenta con privilegios de administrador' });
    }
    next();
}

router.use('/users', productRouter);
router.use("/projects", adminProductRouter);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/aboutus', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'aboutus.html'));
});

router.get('/notifications', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'notifications.html'));
});

router.get('/create-project', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'createProject.html'));
});

router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'projects.html'));
});

router.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'profile.html'));
});

module.exports = router;