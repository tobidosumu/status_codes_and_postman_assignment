import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 5000

app.use(express.json({ extended: true }))

app.get('/ok', (req, res) => {
    res
        .status(200)
        .json({ 
            "status": "Ok",
            "statusCode": 200,
            "meaning": "The request succeeded. The result meaning of \"success\" depends on the HTTP method."
        })
})

app.get('/created', (req, res) => {
    res
        .status(201)
        .json({ 
            "status": "Created",
            "statusCode": 201,
            "meaning": "The request succeeded, and a new resource was created as a result. This is typically the response sent after POST requests, or some PUT requests."
        })
})

app.get('/accepted', (req, res) => {
    res
        .status(202)
        .json({ 
            "status": "Accepted",
            "statusCode": 202,
            "meaning": "The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing."
        })
})

app.get('/non-authoritative-info', (req, res) => {
    res
        .status(203)
        .json({ 
            "status": "Non-Authoritative Information",
            "statusCode": 203,
            "meaning": "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the 200 OK response is preferred to this status."
        })
})

app.get('/no-content', (req, res) => {
    res
        .status(204)
        .json({ 
            "status": "No Content",
            "statusCode": 204,
            "meaning": "There is no content to send for this request, but the headers may be useful. The user agent may update its cached headers for this resource with the new ones."
        })
})

app.get('/reset-content', (req, res) => {
    res
        .status(205)
        .json({ 
            "status": "Reset Content",
            "statusCode": 205,
            "meaning": "Tells the user agent to reset the document which sent this request."
        })
})

app.get('/partial-content', (req, res) => {
    res
        .status(206)
        .json({ 
            "status": "Partial Content",
            "statusCode": 206,
            "meaning": "This response code is used when the Range header is sent from the client to request only part of a resource."
        })
})

app.get('/multiple-choices', (req, res) => {
    res
        .status(300)
        .json({ 
            "status": "Multiple Choices",
            "statusCode": 300,
            "meaning": "The request has more than one possible response. The user agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)"
        })
})

app.get('/moved-permanently', (req, res) => {
    res
        .status(301)
        .json({ 
            "status": "Moved Permanently",
            "statusCode": 301,
            "meaning": "The URL of the requested resource has been changed permanently. The new URL is given in the response."
        })
})

app.get('/found', (req, res) => {
    res
        .status(302)
        .json({ 
            "status": "Found",
            "statusCode": 302,
            "meaning": "This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests."
        })
})

app.get('/see-other', (req, res) => {
    res
        .status(303)
        .json({ 
            "status": "See Other",
            "statusCode": 303,
            "meaning": "The server sent this response to direct the client to get the requested resource at another URI with a GET request."
        })
})

app.get('/not-modified', (req, res) => {
    res
        .status(304)
        .json({ 
            "status": "Not Modified",
            "statusCode": 304,
            "meaning": "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response."
        })
})

app.get('/temporary-redirect', (req, res) => {
    res
        .status(307)
        .json({ 
            "status": "Temporary Redirect",
            "statusCode": 307,
            "meaning": "The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request."
        })
})

app.get('/bad-request', (req, res) => {
    res
        .status(400)
        .json({ 
            "status": "Bad Request",
            "statusCode": 400,
            "meaning": "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."
        })
})

app.get('/unauthorized', (req, res) => {
    res
        .status(401)
        .json({ 
            "status": "Unauthorized",
            "statusCode": 401,
            "meaning": "The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing)."
        })
})

app.get('/payment-required', (req, res) => {
    res
        .status(402)
        .json({ 
            "status": "Payment Required",
            "statusCode": 402,
            "meaning": "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists."
        })
})

app.get('/forbidden', (req, res) => {
    res
        .status(403)
        .json({ 
            "status": "Forbidden",
            "statusCode": 403,
            "meaning": "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server."
        })
})

app.get('/not-found', (req, res) => {
    res
        .status(404)
        .json({ 
            "status": "Not Found",
            "statusCode": 404,
            "meaning": "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web."
        })
})

app.get('/method-not-allowed', (req, res) => {
    res
        .status(405)
        .json({ 
            "status": "Method Not Allowed",
            "statusCode": 405,
            "meaning": "The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 Forbidden to hide the existence of a resource from an unauthorized client. This response code is probably the most well known due to its frequent occurrence on the web."
        })
})

app.get('/not-acceptable', (req, res) => {
    res
        .status(406)
        .json({ 
            "status": "Not Acceptable",
            "statusCode": 406,
            "meaning": "This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent."
        })
})

app.get('/proxy-authentication-required', (req, res) => {
    res
        .status(407)
        .json({ 
            "status": "Proxy Authentication Required",
            "statusCode": 407,
            "meaning": "This is similar to 401 Unauthorized but authentication is needed to be done by a proxy."
        })
})

app.get('/request-timeout', (req, res) => {
    res
        .status(408)
        .json({ 
            "status": "Request Timeout",
            "statusCode": 408,
            "meaning": "This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message."
        })
})

app.get('/conflict', (req, res) => {
    res
        .status(409)
        .json({ 
            "status": "Conflict",
            "statusCode": 409,
            "meaning": "This response is sent when a request conflicts with the current state of the server."
        })
})

app.get('/gone', (req, res) => {
    res
        .status(410)
        .json({ 
            "status": "Gone",
            "statusCode": 410,
            "meaning": "This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for \"limited-time, promotional services\". APIs should not feel compelled to indicate resources that have been deleted with this status code."
        })
})

app.get('/length-required', (req, res) => {
    res
        .status(411)
        .json({ 
            "status": "Length Required",
            "statusCode": 411,
            "meaning": "Server rejected the request because the Content-Length header field is not defined and the server requires it."
        })
})

app.get('/precondition-failed', (req, res) => {
    res
        .status(412)
        .json({ 
            "status": "Precondition Failed",
            "statusCode": 412,
            "meaning": "The client has indicated preconditions in its headers which the server does not meet."
        })
})

app.get('/payload-too-large', (req, res) => {
    res
        .status(413)
        .json({ 
            "status": "Payload Too Large",
            "statusCode": 413,
            "meaning": "The client has indicated preconditions in its headers which the server does not meet."
        })
})

app.get('/uri-too-long', (req, res) => {
    res
        .status(414)
        .json({ 
            "status": "URI Too Long",
            "statusCode": 414,
            "meaning": "The URI requested by the client is longer than the server is willing to interpret."
        })
})

app.get('/unsupported-media-type', (req, res) => {
    res
        .status(415)
        .json({ 
            "status": "Unsupported Media Type",
            "statusCode": 415,
            "meaning": "The media format of the requested data is not supported by the server, so the server is rejecting the request."
        })
})

app.get('/range-not-satisfiable', (req, res) => {
    res
        .status(416)
        .json({ 
            "status": "416 Range Not Satisfiable",
            "statusCode": 416,
            "meaning": "The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data."
        })
})

app.listen(PORT, () => console.log(`Serve Running on port: http://localhost:${PORT}`))