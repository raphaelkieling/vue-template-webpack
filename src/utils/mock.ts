import {LoremIpsum} from 'lorem-ipsum';
const lorem = new LoremIpsum();

export default (definition: string[]) => ({
    one() {
        const obj: { [key: string]: string } = {};
        definition.forEach(key => {
            if (key === 'id') {
                obj[key] = Math.round(Math.random() * 100).toString();
            } else {
                obj[key] = lorem.generateWords(2)
            }
        });
        return obj;
    },
    many(n: number = 10) {
        return Array(n)
            .fill(0)
            .map(() => {
                return this.one();
            });
    },
});
