import ExampleFeature from './application/features/ExampleFeature';
import Health from "./application/features/Health";

const setupRoutes = (router) => {
  router.get('/example', ExampleFeature.process);
  router.get('/health', Health.check);
  return router;
};

export default setupRoutes;
