import { Router, Response, Request } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { CreateShiftController } from './controllers/shift/CreateShiftController';
import { ListShiftController } from './controllers/shift/ListShiftController';
import { UpdateShiftController } from './controllers/shift/UpdateShiftController';
import { DeleteShiftController } from './controllers/shift/DeleteShiftController';

const router = Router();

//rotas usuario
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/updateUser', isAuthenticated, new UpdateUserController().handle);

//rotas turnos
router.post('/createShift', isAuthenticated, new CreateShiftController().handle);
router.get('/shifts', isAuthenticated, new ListShiftController().handle);
router.put('/updateShift', isAuthenticated, new UpdateShiftController().handle);
router.delete('/deleteShift', isAuthenticated, new DeleteShiftController().handle);


export { router };