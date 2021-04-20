import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@masonhub/hud',
  app: () => System.import('@masonhub/hud'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@masonhub/atlas',
  app: () => System.import('@masonhub/atlas'),
  activeWhen: ['/atlas'],
});

registerApplication({
  name: '@masonhub/oms',
  app: () => System.import('@masonhub/oms'),
  activeWhen: ['/oms'],
});

start({
  urlRerouteOnly: true,
});
