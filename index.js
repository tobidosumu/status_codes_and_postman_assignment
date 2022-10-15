import express from 'express'
import bodyParser from 'body-parser'

import endpointsRoutes from './routes/endpoints.js'

const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/endpoints', endpointsRoutes)

app.get('/', (req, res) => {
    res.send(`Welcome to endpoints with IDs!`)
})

app.use(express.json({ extended: true }))

// #1
app.get('/ok', (req, res) => {
    res
        .status(200)
        .json({ 
            "status": "Ok",
            "statusCode": 200,
            "meaning": "The request succeeded. The result meaning of \"success\" depends on the HTTP method."
        })
})

// #2
app.get('/created', (req, res) => {
    res
        .status(201)
        .json({ 
            "status": "Created",
            "statusCode": 201,
            "meaning": "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests."
        })
})

// #3
app.get('/accepted', (req, res) => {
    res
        .status(202)
        .json({ 
            "status": "Accepted",
            "statusCode": 202,
            "meaning": "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing."
        })
})

// #4
app.get('/non-authoritative-info', (req, res) => {
    res
        .status(203)
        .json({ 
            "status": "Non-Authoritative Information",
            "statusCode": 203,
            "meaning": "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status."
        })
})

// #5
app.get('/no-content', (req, res) => {
    res
        .status(204)
        .json({ 
            "status": "No Content",
            "statusCode": 204,
            "meaning": "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones."
        })
})

// #6
app.get('/reset-content', (req, res) => {
    res
        .status(205)
        .json({ 
            "status": "Reset Content",
            "statusCode": 205,
            "meaning": "Tells the user agent to reset the document which sent this request."
        })
})

// #7
app.get('/partial-content', (req, res) => {
    res
        .status(206)
        .json({ 
            "status": "Partial Content",
            "statusCode": 206,
            "meaning": "This response code is used when the Range header is sent from the client to request only part of a resource."
        })
})

// #8
app.get('/multiple-choices', (req, res) => {
    res
        .status(300)
        .json({ 
            "status": "Multiple Choices",
            "statusCode": 300,
            "meaning": "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)"
        })
})

// #9
app.get('/moved-permanently', (req, res) => {
    res
        .status(301)
        .json({ 
            "status": "Moved Permanently",
            "statusCode": 301,
            "meaning": "The URL of the requested resource has been changed permanently. The new URL is given in the response."
        })
})

// #10
app.get('/found', (req, res) => {
    res
        .status(302)
        .json({ 
            "status": "Found",
            "statusCode": 302,
            "meaning": "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests."
        })
})

// #11
app.get('/see-other', (req, res) => {
    res
        .status(303)
        .json({ 
            "status": "See Other",
            "statusCode": 303,
            "meaning": "The server sent this response to direct the client to get the requested resource at another URI with a GET request."
        })
})

// #12
app.get('/not-modified', (req, res) => {
    res
        .status(304)
        .json({ 
            "status": "Not Modified",
            "statusCode": 304,
            "meaning": "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
        })
})

// #13
app.get('/temporary-redirect', (req, res) => {
    res
        .status(307)
        .json({ 
            "status": "Temporary Redirect",
            "statusCode": 307,
            "meaning": "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request."
        })
})

// #14
app.get('/bad-request', (req, res) => {
    res
        .status(400)
        .json({ 
            "status": "Bad Request",
            "statusCode": 400,
            "meaning": "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."
        })
})

// #15
app.get('/unauthorized', (req, res) => {
    res
        .status(401)
        .json({ 
            "status": "Unauthorized",
            "statusCode": 401,
            "meaning": "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."
        })
})

// #16
app.get('/payment-required', (req, res) => {
    res
        .status(402)
        .json({ 
            "status": "Payment Required",
            "statusCode": 402,
            "meaning": "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists."
        })
})

// #17
app.get('/forbidden', (req, res) => {
    res
        .status(403)
        .json({ 
            "status": "Forbidden",
            "statusCode": 403,
            "meaning": "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server."
        })
})

// #18
app.get('/not-found', (req, res) => {
    res
        .status(404)
        .json({ 
            "status": "Not Found",
            "statusCode": 404,
            "meaning": "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web."
        })
})

// #19
app.get('/method-not-allowed', (req, res) => {
    res
        .status(405)
        .json({ 
            "status": "Method Not Allowed",
            "statusCode": 405,
            "meaning": "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web."
        })
})

// #20
app.get('/not-acceptable', (req, res) => {
    res
        .status(406)
        .json({ 
            "status": "Not Acceptable",
            "statusCode": 406,
            "meaning": "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
        })
})

// #21
app.get('/proxy-authentication-required', (req, res) => {
    res
        .status(407)
        .json({ 
            "status": "Proxy Authentication Required",
            "statusCode": 407,
            "meaning": "This is similar to 401 Unauthorized but authentication is needed to be done by a proxy."
        })
})

// #22
app.get('/request-timeout', (req, res) => {
    res
        .status(408)
        .json({ 
            "status": "Request Timeout",
            "statusCode": 408,
            "meaning": "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."
        })
})

// #23
app.get('/conflict', (req, res) => {
    res
        .status(409)
        .json({ 
            "status": "Conflict",
            "statusCode": 409,
            "meaning": "This response is sent when a request conflicts with the current state of the server."
        })
})

// #24
app.get('/gone', (req, res) => {
    res
        .status(410)
        .json({ 
            "status": "Gone",
            "statusCode": 410,
            "meaning": "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for \"limited-time, promotional services\". APIs should not feel compelled to indicate resources that have been deleted with this status code."
        })
})

// #25
app.get('/length-required', (req, res) => {
    res
        .status(411)
        .json({ 
            "status": "Length Required",
            "statusCode": 411,
            "meaning": "Server rejected the request because the Content-Length header field is not defined and the server requires it."
        })
})

// #26
app.get('/precondition-failed', (req, res) => {
    res
        .status(412)
        .json({ 
            "status": "Precondition Failed",
            "statusCode": 412,
            "meaning": "The client has indicated preconditions in its headers which the server does not meet."
        })
})

// #27
app.get('/payload-too-large', (req, res) => {
    res
        .status(413)
        .json({ 
            "status": "Payload Too Large",
            "statusCode": 413,
            "meaning": "The client has indicated preconditions in its headers which the server does not meet."
        })
})

// #28
app.get('/uri-too-long', (req, res) => {
    res
        .status(414)
        .json({ 
            "status": "URI Too Long",
            "statusCode": 414,
            "meaning": "The URI requested by the client is longer than the server is willing to interpret."
        })
}   )

// #29
app.get('/unsupported-media-type', (req, res) => {
    res
        .status(415)
        .json({ 
            "status": "Unsupported Media Type",
            "statusCode": 415,
            "meaning": "The media format of the requested data is not supported by the server, so the server is rejecting the request."
        })
}   )

// #30
app.get('/range-not-satisfiable', (req, res) => {
    res
        .status(416)
        .json({ 
            "status": "416 Range Not Satisfiable",
            "statusCode": 416,
            "meaning": "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data."
        })
}   )

/* answer to #3: 
   Write 5 differences between server-side error and client-side error (create an endpoint 
   for this assignment and write the answer inside your code. Call the endpoint assignment-three) 
*/

app.get('/server-vs-client-error', (req, res) => {
    res
        .status(200)
        .json({ 
            "Title": "5 Differences Between Client-Side Status Codes & Server-side Status Codes",
            "status Codes": "4xx(client-side) vs 5xx(server-side)",
            "Differences": 
            `  
                Client-Side Status Codes
                ------------------------
                The 4XX group of status codes is usually related to client-side errors, but changes to the API can also cause 
                them. Here are the 5 most common client-side status error codes and how to solve for them:
                
                
                1. 404 Not Found
                This is by far the most common HTTP status code you can get. It indicates that the URL you used in your request
                doesn’t exist on the API server, or origin server. While this is a 4XX error, which usually means something on 
                the client-side is wrong, this can also indicate a server problem. Sometimes API URL paths change after a version 
                update, but sometimes they change because something on the server went wrong.
            
                The best course of action is to check if you have a typo in your client code before checking if the API has issues.
                
                
                2. 401 Unauthorized
                This status code means you haven’t yet authenticated against the API. The API doesn’t know who you are and it will not
                serve you.
            
                For most APIs you need to sign up and get an API key. This key is then used inside an HTTP header field when you send
                a request, telling the API who you are.
            
                This http status code is similar to the less common 407 Proxy Authentication Required, which means you have not 
                authenticated with the proxy.
            
            
                3. 403 Forbidden
                The forbidden status indicates that you don’t have permission to request that URL. You’re authenticated, but the user 
                or role you’re authenticated for isn’t permitted to make the API request.
            
                This also occurs when you have an authentication issue, like when using the wrong API key or trying to access features
                your subscription plan doesn’t allow for.
            
            
                4. 400 Bad Request
                The 400 Bad Request error message is one of the most generic HTTP status codes. It implies that you did not correctly 
                format your API request. If no additional error information is given in the response body, you have to check the docs. 
                You could be missing a query, a field in the request body, or a header field could be wrong. It could also be that some 
                of your request data might have incorrect syntax.
            
                This is different from the 422 Unprocessable Entity error message, which appears when your request is correctly formatted, 
                but cannot be processed.
                
                
                5. 429 Too Many Requests
                Most API subscription plans have limits — the cheaper the plan, the fewer requests per second are allowed for your API key.
            
                If you’re sending too many requests in a short amount of time, consider throttling them in your client. This response can 
                also indicate that you hit a daily, weekly, or monthly limit on your account. Without implementing API analytics, it’s 
                possible to reach these limits without receiving a push notification or email alert.
                
                
                Server-Side Status Codes
                ------------------------
                The 5XX group of status codes usually return in response to a server error, but an invalid API call that should respond 
                with a 4XX can also return a 5XX error if not caught correctly on the server. Here are the 5 most common errors and how 
                to fix them:
            
            
                1. 500 Internal Server Error
                This HTTP status code can mean anything really, but it usually indicates the API server crashed. It could have been caused
                by something related to your API call.
                Double-check the docs to make sure you did everything right: query fields, body fields, headers, and format.
                If that didn’t fix the problem, it might also have been related to an API update that introduced buggy code, or data the 
                API loaded from an upstream service. In that case, your only cause of action is contacting the API’s support.
            
                
                2. 502 Bad Gateway
                This response tells you that the server you were calling wasn’t the actual API server, but a gateway or proxy. The proxy 
                server tries to call the API server in your name. This error response also indicates that the API server didn’t answer. 
                This could be related to a network problem, or simply because the API server crashed, or was down for maintenance.
                A “bad gateway” error is usually temporary and should be solved by the API provider, but you have to contact support if
                it persists.
                
                
                3. 503 Service Unavailable
                The 503 Service Unavailable Status indicates a server error. Too many API requests were sent and now the API can’t handle 
                any more of them. This problem solves itself when clients send fewer future requests, but it could also mean that the API
                provider didn’t plan enough resources for all of its customers.
                If it fits your use case, you can make your client more resilient to this error by waiting to send another request. But if 
                the error code keeps showing up, you have to contact the API provider.
            
            
                4. 504 Gateway Timed Out
                Like the 502 Bad Gateway status, this response code tells you that the server you were calling is a proxy for the real API 
                server. This time, the problem is the API server’s slow response.
                This could be related to high network latency between the proxy and the API server. It could also mean that the API server 
                takes too long to process your request.
                To solve this problem, check if your request’s content could be related to that timeout. If you are requesting too much data
                or a calculation that takes too long, you should try and reduce it.
                If you think your request is reasonable and the status doesn’t go away, contact support.
            
            
                5. 501 Not Implemented
                The 501 Not Implemented status code is related to the HTTP method you used to request an URL. You can try a different HTTP
                method to make the request.
            
                Usually, an HTTP request with an inappropriate method simply results in a 404 not found status. A not-implemented status 
                implies that the method isn’t implemented “yet.” The API creator can use this status to tell the clients that this method 
                will be available to them in future requests.

                /* #4. Tell the code the difference you want to see in question 3
                answer: */

                I want to the differences between a client-side error and a server-side error
            `
        })
}   )

// #5
app.get('/:id', (req, res) => {
    res
        .id(44)
        .status(510)
        .json({ 
            "status": "Not Extended",
            "statusCode": 510,
            "meaning": "Further extensions to the request are required for the server to fulfill it."
        })
}   )

app.listen(PORT, () => console.log(`Serve Running on port: http://localhost:${PORT}`))