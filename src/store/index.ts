import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import promiseMiddleware from 'redux-promise-middleware';
import notificationsMiddleware from '@redhat-cloud-services/frontend-components-notifications/notificationsMiddleware';
import ReducerRegistry from '@redhat-cloud-services/frontend-components-utilities/ReducerRegistry';
import { Middleware, Reducer } from 'redux';

export let registry: ReducerRegistry<Reducer>;

export function init(...middleware: Middleware[]) {
  registry = getRegistry({}, [promiseMiddleware, notificationsMiddleware({ errorDescriptionKey: ['detail', 'stack'] }), ...middleware]);
  return registry;
}
