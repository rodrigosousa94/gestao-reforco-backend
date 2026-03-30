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
import { CreatePriceController } from './controllers/price/CreatePriceController';
import { ListPriceController } from './controllers/price/ListPriceController';
import { UpdatePriceController } from './controllers/price/UpdatePriceController';
import { DeletePriceController } from './controllers/price/DeletePriceController';
import { CreateStudentController } from './controllers/student/CreateStudentController';
import { ListStudentController } from './controllers/student/ListStudentController';
import { ListStudentByIdController } from './controllers/student/ListStudentByIdController';

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

//rotas preços
router.post('/createPrice', isAuthenticated, new CreatePriceController().handle);
router.get('/prices', isAuthenticated, new ListPriceController().handle);
router.put('/editPrice', isAuthenticated, new UpdatePriceController().handle);
router.delete('/deletePrice', isAuthenticated, new DeletePriceController().handle);

//rotas estudantes
router.post('/createStudent', isAuthenticated, new CreateStudentController().handle);
router.get('/students', isAuthenticated, new ListStudentController().handle);
router.get('/student', isAuthenticated, new ListStudentByIdController().handle);


export { router };