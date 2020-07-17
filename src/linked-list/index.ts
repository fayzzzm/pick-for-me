import That from 'that-is';

interface Node<T> {
    value: T;
    next: Node<T> | null;
}

export class LinkedList<Z> {
    private head: Node<Z> | null = null;
    private tail: Node<Z> | null = null;
    public length: number = 0;

    constructor() {
        // SOmething will be here
    }

    private generateNode = (value: Z): Node<Z> => ({
        value,
        next: null,
    });

    public isEmpty = (): boolean => this.length === 0;

    public push = (value: Z): void => {
        const node = this.generateNode(value);

        if (That.isNull(this.head)) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail!.next = node;
            this.tail = node;
        }

        this.length++;
    };

    public pull = (): Node<Z> | string => {
        if (this.length) {
            let step = 0;
            let currentNode: Node<Z> | null = this.head;

            while (step !== this.length - 1) {
                currentNode = currentNode!.next;
                step++;
            }

            this.tail = currentNode;
            this.tail!.next = null;

            return this.tail as Node<Z>;
        } else {
            return `Tail doesn't exist!`;
        }
    };
}
