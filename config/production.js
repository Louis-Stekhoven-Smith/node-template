module.exports = {
  port: '8080',
  elasticsearch_host: process.env.ELASTICSEARCH_HOST || 'http://elasticsearch:9200',
  maxRetries: 5,
};
