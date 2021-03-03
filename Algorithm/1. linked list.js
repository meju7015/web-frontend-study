class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    add(data) {
        const node = {
            data: data,
            next: null
        }
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head

            while (current.next !== null) {
                current = current.next
            }
            current.next = node;
        }

        this.length++;
    }

    find(position) {
        let current = this.head
        let count = 0;
        while (count < position) {
            current = current.next
            count++;
        }
        return current.data;
    }

    remove(position) {
        let current = this.head;
        let before;
        let remove;
        let count = 0;
        if (position === 0) {
            remove = this.head;
            this.head = this.head.next
            this.length--;
            return remove;
        }
        while (count < position) {
            before = current;
            current = current.next;
            count++;
        }
        before.next = current.next;
        remove = current;

        this.length--;
        return remove;
    }
}

const linkedList = new LinkedList();

linkedList.add(1) // 1 첫번째 노드에 1 추가
linkedList.add(2) // 2 두번째 노드에 2 추가
linkedList.add(3) // 3 세번째 노드에 3 추가
linkedList.find(0) // 1 첫 번째 노드 검색
linkedList.remove(1) // 두 번째 노드 2 삭제
linkedList.find(0) // 1
linkedList.find(1) // 3
