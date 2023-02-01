class MessageModel {
  constructor(data = {}) {
    this.text = null;
    this.type = null;
    this.source = null;
    Object.assign(this, data);
  }
}

export default MessageModel;