export const chatMessages = [
  {
    id: 1,
    sender: "user",
    text: "Who is responsible for preparing release notes?",
  },
  {
    id: 2,
    sender: "assistant",
    text: "Rahul is responsible for preparing the release notes for the upcoming launch.",
    confidence: 92,
    sources: [
      {
        title: "Product Launch Meeting",
        type: "Meeting",
        timestamp: "Yesterday · 10:30 AM",
      },
      {
        title: "Release Planning Document",
        type: "Document",
        timestamp: "Page 4",
      },
    ],
  },
];