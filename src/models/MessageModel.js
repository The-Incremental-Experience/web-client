class MessageModel {
  constructor(data = {}) {
    this.text = null;
    this.type = null;
    Object.assign(this, data);
  }
}

export default MessageModel;