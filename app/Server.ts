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
                let averageMap = new Map();
                const average = [];
                  response.data.forEach((home) => {
                    prices[home.communityId] ? prices[home.communityId].push(home.price) : prices[home.communityId] = [home.price];
                  });

                  // Calc price to average and change hashmap to object
                  for (var key in prices) {
                    var sum = prices[key].reduce((a,x) => a+=x,0);
                    averageMap.set('id', key).set('averagePrice', Math.ceil(sum / prices[key].length));
                    const objAverage = [...averageMap].reduce((o, [k, v])=>{
                        o[k] = v;
                        return o;
                        }, {});
                    average.push(Object.assign(objAverage,{}));
                  };
                res.status(200).send(Object.values(average));
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

