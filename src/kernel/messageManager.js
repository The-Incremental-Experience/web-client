import exampleMessages from "../fixtures/exampleMessages";

class MessageManager {
  constructor() {
    this.messages = exampleMessages;
  }

  getDisplayableMessages() {
    return this.messages;
  }

  sortMessages() {}

  processUserQuestion(userQuery) {}
}

export default MessageManager;
