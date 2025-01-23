import { v4 } from "uuid";

const notes = [
  {
    title: "Note 1 title",
    content: "Note 1 content",
    tags: [{ tag: "coding", id: v4()}],
    color: "#cce0ff",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "01/20/25 10.30PM",
    createdTime: new Date("Thu Jan 20 2025 22:55:30").getTime(),
    editedTime: null,
    id: v4()
  },
  {
    title: "Note 2 title",
    content: "Note 2 content",
    tags: [{ tag: "coding", id: v4()}],
    color: "#ffcccc",
    priority: "high",
    isPinned: true,
    isRead: false,
    date: "01/21/25 11.30PM",
    createdTime: new Date("Thu Jan 21 2025 23:30:30").getTime(),
    editedTime: null,
    id: v4()
  }  
]

export default notes;