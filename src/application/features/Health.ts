import { Service } from 'typedi';

@Service()
export default class Health {
  constructor() {
    console.log('Instantiating HealthController');
  }

  public static check = async (req, res) :Promise<void> => {
    res.setHeader('Content-Type', 'application/json');
    try {
      res.send({ status: 'Healthy' });
    } catch (exception) {
      res.send({ status: 'Unhealthy', elasticsearch: { status: 'unreachable', error: exception.message } });
    }
  };
}
