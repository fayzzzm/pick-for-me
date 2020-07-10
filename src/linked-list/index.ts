import That from 'that-is';

interface Node {
  value: any;
  next: any;
}

export class LinkedList {
  private head: Node | null = null;

  private tail: Node | null = null;

  public length: number = 0;

  constructor() {
    // SOmething will be here
  }

  private generateNode = (value: any): Node => ({
    value,
    next: null,
  });

  public isEmpty = (): boolean => this.length === 0;

  public push = (value: any): void => {
    const node = this.generateNode(value);
    if (That.isNull(this.head)) {
      this.head = node;
      this.tail = node;
      this.length++;
    }

    this.tail!.next = node;
    this.tail = node;
    this.length++;
  };
}
