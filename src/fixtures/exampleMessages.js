import MessageModel from "../models/MessageModel";
import MessageType from "../models/constants";

const exampleMessages = [
  {
    text: "What are the different types of loneliness?",
    type: MessageType.Question,
  },
  {
    text: "Emotional loneliness comes from not having enough emotional\\nintimacy with other people. It can start in childhood, due to\\nfeeling emotionally unseen by self-preoccupied parents, or it can\\narise in adulthood when an emotional connection is lost. If it\u2019s been a\\nlifelong feeling, it points to the likelihood of not being sufficiently emotionally responded to as a child.\\nGrowing up in a family with emotionally immature parents is a lonely\\nexperience. These parents may look and act perfectly normal, caring for\\ntheir child\u2019s physical health and providing meals and safety. However, if\\nthey don\u2019t make a solid emotional connection with their child, the child\\nwill have a gaping hole where true security might have been.\\nThe loneliness of feeling unseen by others is as fundamental a pain as\\nphysical injury, but it doesn\u2019t show on the outside. Emotional loneliness is\\na vague and private experience, not easy to see or describe. You might call\\nit a feeling of emptiness or being alone in the world. Some people have\\ncalled this feeling existential loneliness, but there\u2019s nothing existential\\nabout it. If you feel it, it came from your family.\\nChildren have no way of identifying a lack of emotional intimacy in\\ntheir relationship with a parent. It isn\u2019t a concept they have. And it\u2019s even \\nless likely that they can understand that their parents are emotionally\\nimmature. All they have is a gut feeling of emptiness, which is how a child\\nexperiences loneliness. With a mature parent, the child\u2019s remedy for loneliness is simply to go to the parent for affectionate connection. But if your\\nparent was scared of deep feelings, you might have been left with an uneasy\\nsense of shame for needing comforting.\\nWhen the children of emotionally immature parents grow up, the\\ncore emptiness remains, even if they have a superficially normal adult life.\\nTheir loneliness can continue into adulthood if they unwittingly choose\\nrelationships that can\u2019t give them enough emotional connection. They\\nmay go to school, work, marry, and raise children, but all the while they\u2019ll\\nstill be haunted by that core sense of emotional isolation. In this chapter,\\nwe\u2019ll look at people\u2019s experience of emotional loneliness, along with how\\nself-awareness helped them understand what they were missing and how\\nto change.",
    type: MessageType.Answer,
  },
  {
    text: "What is the basis for our security as children?",
    type: MessageType.Question,
  },
  {
    text: "Emotional intimacy involves knowing that you have someone you can tell\\nanything to, someone to go to with all your feelings, about anything and\\neverything. You feel completely safe opening up to the other person,\\nwhether in the form of words, through an exchange of looks, or by just\\nbeing together quietly in a state of connection. Emotional intimacy is profoundly fulfilling, creating a sense of being seen for who you really are. It\\ncan only exist when the other person seeks to know you, not judge you.\\nAs children, the basis for our security is emotional connection with\\nour caretakers. Emotionally engaged parents make children feel that they\\nalways have someone to go to. This kind of security requires genuine emotional interactions with parents. Parents who are emotionally mature\\nengage in this level of emotional connection almost all the time. They\u2019ve\\ndeveloped enough self-awareness to be comfortable with their own feelings, as well as those of other people.\\nMore importantly, they\u2019re emotionally attuned to their children,\\nnoticing their children\u2019s moods and welcoming their feelings with interest.\\nA child feels safe connecting with such a parent, whether seeking comfort\\nor sharing enthusiasm. Mature parents make their children feel that they\\nenjoy engaging with them and that it\u2019s fine to talk about emotional issues.\\nThese parents have a lively, balanced emotional life and are usually consistent in their attentiveness and interest toward their children. They are\\nemotionally dependable.",
    type: MessageType.Answer,
  },
].map((message) => new MessageModel(message));

export default exampleMessages;
