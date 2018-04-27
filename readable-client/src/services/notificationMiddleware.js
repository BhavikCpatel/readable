export default function createUiNotifier(uiNotificationAction) {
  /* if (typeof uiNotificationAction === 'undefined') {
    return () => next => action => next(action);
  }
  if (!uiNotificationAction.type) {
    return () => next => action => next(action);
  } */
  return store => next => action => {
    const result = next(action);
    if (action.uiNotification) {
      store.dispatch(uiNotificationAction(action.uiNotification));
    }
    return result;
  };
}
