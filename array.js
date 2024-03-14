const object = {
    name: 'John',
    age: 30,
};

const array = [1, 1, 1, 1, 1];

for (let index = 0; index < array.length; index++) {
    const current = array[index];
}

for (const current of array) {
}

class Queue {
    constructor(
        private data,
    ) {}

    public add(item) {
        this.data.push(item)
    }

    public get() {
        this.data.shift();
    }
}

const queue = new Queue([1, 2, 3, 4, 5]);

queue.add(1);
queue.add(2);
queue.add(3);

queue.get(); // 1
queue.get(); // 2
queue.get(); // 3


const stack = new Stack([1, 2, 3, 4, 5]);

stack.add(1);
stack.add(2);
stack.add(3);

stack.get(); // 3
stack.get(); // 2
stack.get(); // 1

const someArray = [1, 2, 3, 4, 4, 5];

const result = Array.from(Set.from(someArray));

class Set {
    public add(item) {
        this.data.push(item)
    }

    public get() {
        this.data.shift();
    }
}

const set = new Set();

set.add(3);
set.add(1);
set.add(1);
set.add(2);
set.add(2);

set.getAll(); // [1, 2, 3]

const some = ['soem', true, { hello: true }];

some[2]; // { hello: true }

class LindedList {
    constructor(
        private data = [],
    ) {}

    public add(item) {
        this.data.push(item)
    }

    public get() {
        this.data.shift();
    }
}

const first = {   };

const second = { prev() { return first }, next() { return third } };

const third = {  };

{
    children: [
        { children: [
            { children: [] },
            { children: [] },
        ] },
        { children: [] },
    ]
}

const someArray = [];

someArray[0]; // 1

someArray.push(1);

const vector = Array.from({ length: 10 });