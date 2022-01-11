import * as express from 'express';
import { Cat, CatType } from 'app.model';
const app: express.Express = express();

const data = [1, 2, 3, 4];

app.get('/', (req: express.Request, res: express.Response) => {
    res.send({ data });
});

app.listen(8000, () => {
    console.log('서버온');
});
