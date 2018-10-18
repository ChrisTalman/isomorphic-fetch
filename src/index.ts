'use strict';

let actualFetch;
let actualHeaders;
let actualRequest;
let actualResponse;
let actualURLSearchParams;

// @ts-ignore
if (typeof fetch === 'undefined')
{
	const NodeFetch = require('node-fetch');
    const URL = require('url');
    actualFetch = NodeFetch.default;
    actualHeaders = NodeFetch.Headers;
    actualRequest = NodeFetch.Request;
    actualResponse = NodeFetch.Response;
    actualURLSearchParams = URL.URLSearchParams;
}
else
{
    // @ts-ignore
    actualFetch = fetch;
    // @ts-ignore
    actualHeaders = Headers;
    // @ts-ignore
    actualRequest = Request;
    // @ts-ignore
    actualResponse = Response;
    // @ts-ignore
    actualURLSearchParams = URLSearchParams;
};

export
{
    actualFetch as fetch,
    actualHeaders as Headers,
    actualRequest as Request,
    actualResponse as Response,
    actualURLSearchParams as URLSearchParams
};