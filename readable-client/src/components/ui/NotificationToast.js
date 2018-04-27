import React from 'react';
import IconButton from './IconButton';

const Notifier = ({ type, message, onClose: onCloseHandler }) => (
  <section className={`notification-container ${type}-message`}>
    <div className="message">{message}</div>
    <IconButton
      id="close-notification"
      icon="close"
      iconColor="white"
      onClick={() => onCloseHandler(false)}
    />
  </section>
);

export default class NotificationToast extends React.Component {
  state = { showNotification: true };

  componentDidMount() {
    const { timeout } = this.props;
    this.timeoutId = this.setTimer(timeout);
  }
  componentWillReceiveProps(nextProps) {
    this.timeoutId = this.setTimer(nextProps.timeout);
    this.setNotification(true);
  }

  setTimer(timeout) {
    return setTimeout(
      () => this.setNotification(false),
      timeout > 0 ? timeout : 1000,
    );
  }
  setNotification(isVisible) {
    if (!isVisible) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.props.onClose();
    }
    this.setState({ showNotification: isVisible });
  }
  timeoutId = null;

  render() {
    return this.state.showNotification ? <Notifier {...this.props} /> : null;
  }
}
