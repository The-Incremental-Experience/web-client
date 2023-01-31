class MessageModel {
  constructor(data = {}) {
    this.text = null;
    Object.assign(this, data);
  }
}

export default MessageModel;