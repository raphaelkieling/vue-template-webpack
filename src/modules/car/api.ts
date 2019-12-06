import createMock from '../../utils/mock';

const mock = createMock(['id', 'model']);

export default {
    baseUrl: '/car',
    getAll() {
        return mock.many(4);
    }
};
