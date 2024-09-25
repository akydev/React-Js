export interface dataGridArray {
  firstName: string;
  lastName: string;
  id: number;
}

export interface formObj {
  firstName: string;
  lastName: string;
}

export interface IDisplayFormResultGrid {
  data: dataGridArray[];
  deleteInfo: (id: number) => void;
  handleEdit: (id: number) => void;
}

export interface IFormChildPage {
  open: boolean;
  handleClose: () => void;
  setArr: (
    newState:
      | dataGridArray[]
      | ((prevState: dataGridArray[]) => dataGridArray[])
  ) => void;
  arr: dataGridArray[];
  id: number;
  setId: (newState: number | ((prevState: number) => number)) => void;
}
