export class Todo {
  constructor(
    private rowNumber: number,
    private taskName: string,
    private assignee: string
  ) {}

  getRowNumber(): number {
    return this.rowNumber;
  }
  getTaskName(): string {
    return this.taskName;
  }
  getAssignee(): string {
    return this.assignee;
  }
  setRowNumber(rowNumber: number) {
    this.rowNumber = rowNumber;
  }
}
