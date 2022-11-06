import nodeConfig from 'config';
import { Service } from 'typedi';

@Service()
export default class Configuration {
  public readonly port: string;

  public readonly elasticsearch_host: string;

  public maxRetries: number;

  constructor() {
    console.log('Instantiating configuration');
    this.port = nodeConfig.get<string>('port');
    this.elasticsearch_host = nodeConfig.get<string>('elasticsearch_host');
    this.maxRetries = nodeConfig.get<number>('maxRetries');
  }
}
