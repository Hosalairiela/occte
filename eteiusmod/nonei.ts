interface Item {
    name: string;
    value: number;
}

function aggregateValues(items: Item[]): number {
    let aggregator = 0;
    for (let item of items) {
        aggregator += item.value;
    }
    return aggregator;
}

const items = [
    { name: 'Item 1', value: 10 },
    { name: 'Item 2', value: 20 },
    { name: 'Item 3', value: 30 }
];

console.log(aggregateValues(items)); // Output: 60
