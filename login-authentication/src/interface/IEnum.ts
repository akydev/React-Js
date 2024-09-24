enum CountActionKind {
  ADD = "Add",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}
export interface IEnum {
  type: CountActionKind;
  payload: string;
}
