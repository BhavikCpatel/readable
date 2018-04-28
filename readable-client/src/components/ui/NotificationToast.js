import React from 'react';
import PropTypes from 'prop-types';
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

Notifier.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};
Notifier.defaultProps = {
  onClose: null,
};

export default class NotificationToast extends React.Component {
  static propTypes = {
    timeout: PropTypes.number,
    onClose: PropTypes.func,
  };
  static defaultProps = {
    timeout: 1000,
    onClose: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      showNotification: true,
    };
  }
  componentDidMount() {
    const { timeout } = this.props;
    this.timeoutId = this.setTimer(timeout);
  }
  componentWillReceiveProps(nextProps) {
    this.timeoutId = this.setTimer(nextProps.timeout);
    this.setNotification(true);
  }

  setTimer(timeout) {
    return setTimeout(() => this.setNotification(false), timeout);
  }
  setNotification(isVisible) {
    if (!isVisible) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
    this.setState({ showNotification: isVisible });
  }

  render() {
    return this.state.showNotification ? <Notifier {...this.props} /> : null;
  }
}
