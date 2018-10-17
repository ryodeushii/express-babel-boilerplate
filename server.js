import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

/* import configs */
import morgan from 'configs/morgan';
import { corsOptionsDelegate } from 'configs/cors';
import env from 'configs/env';
import status from 'utils/status';


const app = express();

app.use(cors(corsOptionsDelegate));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression({ level: 6 }));
app.use(morgan);

const router = express.Router();
router.get('/', status);

app.use('/', router);

app.listen(env?.port, () => {
// eslint-disable-next-line no-console
  console.log('Server is listening on port %d', env?.port);
});
