import {Express, Request, Response} from 'express';
import express from 'express';
import axios from 'axios';
import * as path from 'path';

export class Server {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.use(express.static(path.resolve('./') + '/build/client'));

        // get communities to show for home page
        this.app.get('/api/communities', (req: Request, res: Response): void => {
            axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities')
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send();
                console.log(error.message);
            });
        });
        // get homes and calc price
        this.app.get('/api/average', (req: Request, res: Response): void => {
            axios.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes')
            .then(response => {
                let prices = {};
                let average = new Map();
                  response.data.forEach((home) => {
                    prices[home.communityId] ? prices[home.communityId].push(home.price) : prices[home.communityId] = [home.price];
                  });
                  for (var key in prices) {
                    var sum = prices[key].reduce((a,x) => a+=x,0);
                    average.set(key, Math.ceil(sum / prices[key].length));
                  }
                res.status(200).send(JSON.stringify([...average]));
            })
            .catch(error => {
                res.status(500).send();
                console.log(error.message);
            });
        });
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}!`));
    }

}

