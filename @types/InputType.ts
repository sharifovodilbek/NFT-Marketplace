import { ChangeEventHandler } from "react";

export interface InputType {
  placeholder?: string;
  type: "text" | "email" | "password";
  classList?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>,
  value?: string
}