import nock from 'nock';
import { ApiResource, State } from './ApiResource';

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

    describe('state', () => {
        describe('when the response is an error', () => {
            beforeEach(() => {
                const nock = require('nock');
                const scope = nock('http://localhost')
                    .get('/someurl')
                    .reply(401, {
                        error: '123',
                    });
            });
            it('The status of the resource is Status.Error', async () => {
                const res = new ApiResource('/someurl');
                await res.sync();
                expect(res.data).toBeUndefined();
                expect(res.state).toBe(State.Error);
            });
        });
    });
});
