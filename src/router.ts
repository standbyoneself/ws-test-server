import { Router } from 'express';
import login from './handlers/login';
import checkAuth from './handlers/checkAuth';
import fetchUser from './handlers/fetchUser';
import fetchRepos from './handlers/fetchRepos';
import fetchLanguages from './handlers/fetchLanguages';
import logout from './handlers/logout';
import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.use('/user', authMiddleware);
router.use('/repos', authMiddleware);
router.use('/:username/:repo/languages', authMiddleware);

router.get('/login', login);
router.get('/checkAuth', checkAuth);
router.get('/user', fetchUser);
router.get('/repos', fetchRepos);
router.get('/:username/:repo/languages', fetchLanguages);
router.get('/user', fetchUser);
router.get('/logout', logout);

export default router;
