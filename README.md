# Status Code Endpoints on Postman - Assignment <br>

**1. a. Why do we need status code?**

        An HTTP status code is a server response to a browser's request. When a website is visited, 
        the browser sends a request to the site's server, and the server then responds to the 
        browser's request with a three-digit code - the HTTP status code.

        Status and error codes refer to a code number in the response header that indicates 
        the general classification of the response — for example, whether the request was 
        successful (200), resulted in a server error (500), had authorization issues (403), 
        and so on.  
        
        
   **b.  Give 5 reasons for question 1. a.**
    
       i.  Status code defines the status of the request. On entering a URL, a mistake can be typed in the URL,
           or there may be a server-side problem. Status code is used to know about what went wrong and where you
           made a mistake.    
           
       ii. They help identify the cause of the problem when a web page or other resource do not load properly.
       
      iii. For example, the HTTP status line 500: Internal Server Error is made up of the HTTP status code of 
           500 and the HTTP reason phrase of Internal Server Error.
           
       iv. 4xx Client Error: This group includes those where the request for a web page or other resource contains a
           bad syntax or cannot be filled for some other reason, presumably by the fault of the client (the web surfer).
           
        v. 5xx Server Error: This group includes those where the request for a web page or other resource is understood
           by the website's server, but is incapable of filling it for some reason.
           
           
   **c. List 10 of the most important error codes arranged in priorities**
           
        i.  Status Code 200 – This is the standard “OK” status code for a successful HTTP request. 
            The response that is returned is dependent on the request. For example, for a GET request, 
            the response will be included in the message body. For a PUT/POST request, the response will 
            include the resource that contains the result of the action.
            
       ii.  Status Code 201 – This is the status code that confirms that the request was successful and, 
            as a result, a new resource was created. Typically, this is the status code that is sent after a POST/PUT request.
            
      iii.  Status Code 204 – This status code confirms that the server has fulfilled the request but does not need to return 
            information. Examples of this status code include delete requests or if a request was sent via a form and the response
            should not cause the form to be refreshed or for a new page to load.
            
       iv.  Status Code 304 – The is status code used for browser caching. If the response has not been modified, 
            the client/user can continue to use the same response/cached version. For example, a browser can request 
            if a resource has been modified since a specific time. If it hasn’t, the status code 304 is sent. If it has
            been modified, a status code 200 is sent, along with the resource.
            
       v.   Status Code 400 – The server cannot understand and process a request due to a client error. Missing data, 
            domain validation, and invalid formatting are some examples that cause the status code 400 to be sent.
            
      vi.   Status Code 401 – This status code request occurs when authentication is required but has failed or not been provided.
      
     vii.   Status Code 403 – Very similar to status code 401, a status code 403 happens when a valid request was sent, 
            but the server refuses to accept it. This happens if a client/user requires the necessary permission or they 
            may need an account to access the resource. Unlike a status code 401, authentication will not apply here.
            
    viii.   Status Code 404 – The most common status code the average user will see. A status code 404 occurs when the
            request is valid, but the resource cannot be found on the server. Even though these are grouped in the Client
            Errors “bucket,” they are often due to improper URL redirection.
            
      ix.   Status Code 409 – A status code 409 is sent when a request conflicts with the current state of the resource. 
            This is usually an issue with simultaneous updates, or versions, that conflict with one another.
            
       x.   Status Code 410 – Resource requested is no longer available and will not be available again. Learn about 
            network error 410.
            
      xi.   Status Code 500 – Another one of the more commonly seen status codes by users, the 500 series codes 
            are similar to the 400 series codes in that they are true error codes. The status code 500 happens 
            when the server cannot fulfill a request due to an unexpected issue. Web developers typically have to 
            comb through the server logs to determine where the exact issue is coming from.
       
       
       
  2.  __Create 20 endpoints using different status codes then add them to postman__

       Please visit this link 👉 [link to 30 status code endpoints](./index.js) for the answers.
  
  
**3.  Write 5 differences between server error and client error (create an endpoint for this assignment and write
      the answer inside your code. Call the endpoint assignment-three)**
      
    * Client-Side Status Codes
      The 4XX group of status codes is usually related to client-side errors, but changes to the API can also cause 
      them. Here are the 5 most common client-side status error codes and how to solve for them:
      
    __1. 404 Not Found__
      This is by far the most common HTTP status code you can get. It indicates that the URL you used in your request
      doesn’t exist on the API server, or origin server. While this is a 4XX error, which usually means something on 
      the client-side is wrong, this can also indicate a server problem. Sometimes API URL paths change after a version 
      update, but sometimes they change because something on the server went wrong.

      The best course of action is to check if you have a typo in your client code before checking if the API has issues.
      
    __2. 401 Unauthorized__
      This status code means you haven’t yet authenticated against the API. The API doesn’t know who you are and it will not
      serve you.

      For most APIs you need to sign up and get an API key. This key is then used inside an HTTP header field when you send
      a request, telling the API who you are.

      This http status code is similar to the less common 407 Proxy Authentication Required, which means you have not 
      authenticated with the proxy.

    __3. 403 Forbidden__
      The forbidden status indicates that you don’t have permission to request that URL. You’re authenticated, but the user 
      or role you’re authenticated for isn’t permitted to make the API request.

      This also occurs when you have an authentication issue, like when using the wrong API key or trying to access features
      your subscription plan doesn’t allow for.

    __4. 400 Bad Request__
      The 400 Bad Request error message is one of the most generic HTTP status codes. It implies that you did not correctly 
      format your API request. If no additional error information is given in the response body, you have to check the docs. 
      You could be missing a query, a field in the request body, or a header field could be wrong. It could also be that some 
      of your request data might have incorrect syntax.

      This is different from the 422 Unprocessable Entity error message, which appears when your request is correctly formatted, 
      but cannot be processed.
      
    __5. 429 Too Many Requests__
      Most API subscription plans have limits — the cheaper the plan, the fewer requests per second are allowed for your API key.

      If you’re sending too many requests in a short amount of time, consider throttling them in your client. This response can 
      also indicate that you hit a daily, weekly, or monthly limit on your account. Without implementing API analytics, it’s 
      possible to reach these limits without receiving a push notification or email alert.
      

**4.  Tell the code the difference you want to see in question 3**
  
**5.  Use get by id in another endpoint**
  
  
