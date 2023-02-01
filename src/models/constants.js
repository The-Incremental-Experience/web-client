class MessageType {
  static Question = new MessageType("question");
  static Answer = new MessageType("answer");

  constructor(value) {
    this.value = value;
  }

  toString() {
    return `MessageType.${this.value}`;
  }
}

export default MessageType;
