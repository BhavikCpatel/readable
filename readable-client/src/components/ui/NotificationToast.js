import React from 'react';
import IconButton from './IconButton';

export default class NotificationToast extends React.Component {
  state = { showNotification: true };

  componentDidMount() {
    const { timeout } = this.props;
    this.timeoutId = setTimeout(
      () => this.setNotification(false),
      timeout > 0 ? timeout : 4000,
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
    const { type, message } = this.props;
    return this.state.showNotification ? (
      <section className={`notification-container ${type}-message`}>
        <div className="message">{message}</div>
        <IconButton
          id="close-notification"
          icon="close"
          iconColor="white"
          onClick={() => this.setNotification(false)}
        />
      </section>
    ) : null;
  }
}
