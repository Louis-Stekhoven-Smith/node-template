// eslint-disable-next-line max-classes-per-file
import InternalError from '../errors/InternalError';
import BadRequestError from '../errors/BadRequestError';

class Request {
  public readonly talentIds: Array<string>;

  public readonly clientId: string;

  constructor(clientId: string, talentIds: Array<string>) {
    if (!clientId) {
      throw new BadRequestError('No client provided in request e.g client=demo');
    }
    if (!talentIds || talentIds.length === 0) {
      throw new BadRequestError('No talentIds list provided in request body e.g "talentIds": [27,32]');
    }
    this.talentIds = talentIds;
    this.clientId = clientId;
  }
}

export default class ExampleFeature {
  constructor() {
    console.log('Instantiating ExampleFeature');
  }

  public static process = async (req, res) :Promise<void> => {
    try {
      const request = new Request(req.query.client, req.body.talentIds);
      const result = ExampleFeature.service(request);
      res.setHeader('Content-Type', 'application/json');
      res.send(result);
    } catch (exception) {
      if (exception instanceof InternalError) {
        res.status(500).send(exception.message);
        return;
      }
      res.status(400).send(exception.message);
    }
  };

  private static service(request: Request) {
    console.log(request.talentIds, request.clientId);
    return { message: 'ExampleFeature successfully processed' };
  }
}
