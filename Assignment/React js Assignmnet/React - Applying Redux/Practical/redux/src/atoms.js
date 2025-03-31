import { atom } from "recoil";

// Define a Recoil atom for todo list state
export const todoListState = atom({
  key: "todoListState",
  default: [],
});
