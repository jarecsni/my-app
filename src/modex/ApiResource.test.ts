import nock from 'nock';
import { ApiResource } from './ApiResource';

describe('apiResource', () => {
    describe('basics', () => {
        it('is defined', () => {
            expect(ApiResource).not.toBeUndefined();
        });
        it('returns the url property', () => {
            const res = new ApiResource('someUrl');
            expect(res.url).toEqual('someUrl');
        });
    });

    describe('requests', () => {
        beforeEach(() => {
            const nock = require('nock');

            const scope = nock('http://localhost').get('/someurl').reply(200, {
                response: 'yes',
            });
        });
        it('can make a request to the specified url', async () => {
            const res = new ApiResource('/someurl');
            expect(res.data).toBeUndefined();
            await res.sync();
            expect(res.data).not.toBeUndefined();
            expect(res.data).toEqual({ response: 'yes' });
        });
    });
});
