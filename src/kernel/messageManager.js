import exampleMessages from "../examples/exampleMessages";
import MessageType from "../models/constants";
import MessageModel from "../models/MessageModel";
import { networkCheck, questionPost } from "./api";

class MessageManager {
  constructor() {
    this.messages = exampleMessages;
  }

  getDisplayableMessages() {
    return this.messages;
  }

  /** Push question and response placeholder if everything goes well */
  async pushQuestion(questionText: string) {
    if (await networkCheck()) {
      this.messages.push(
        new MessageModel({ text: questionText, type: MessageType.Question })
      );
    }
  }

  /** Request answer from backend */
  async requestAnswer(questionText: string) {
    const response = await questionPost(questionText);
    this.messages.push(new MessageModel(response));
  }
}

export default MessageManager;
