process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import validateEnv from '@utils/validateEnv';
import HealthRoute from '@routes/health.route';
import CoinflipRoute from '@routes/coinflip.route';

validateEnv();

const app = new App([new HealthRoute(), new CoinflipRoute()]);

app.listen();
