process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import BetsRoute from '@routes/bets.route';

validateEnv();

const app = new App([new BetsRoute()]);

app.listen();
