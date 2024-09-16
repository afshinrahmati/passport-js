# passport-js

## user Authentication Choice

<h5> 
1. Session<br>
2. json web token<br>
3. OAuth ==> 1.in-house 2.Saas<br>
4. 4.other.<br>
</h5>

# middlewares

<h5>
* between different application and service and facilitate communication and data management.<br>
* on each Http request, passport will use a "strategy<plan>" to determine<check> whether the requestor has permission to view that or not.<br>


[//]: # 1.Session
session based authentication would be the oldest of them and it is good for server-side that each user had self current
role.
it depend on Http Headers Protocol cookie and session

1) Cookie =>Cookies introduce the concept of "persistent state" and allow the browser to "remember" something that the
   server told it previously.
2) session => session and cookie are actually similar and the main difference between the two is the location of their
   storage
   cookie set by the server but store in the server.
   .Server: Hey browser, I just authenticated this user, so you should store a cookie to remind me (Set-Cookie:
   user_auth=true; expires=Thu, 1-Jan-2020 20:00:00 GMT) next time you request something from me
   .Browser: Thanks, server! I will attach this cookie to my Cookie request header
   .Browser: Hey server, can I see the contents at www.domain.com/protected? Here is the cookie you sent me on the last
   request.
   .Server: Sure, I can do that. Here is the page data. I have also included another Set-Cookie header (Set-Cookie:
   marketing_page_visit_count=1; user_ip=192.1.234.21) because the company who owns me likes to track how many people
   have visited this specific page and from which computer for marketing purposes.
   .Browser: Okay, I'll add that cookie to my Cookie request header
   .Browser: Hey Server, can you send me the contents at www.domain.com/protected/special-offer? Here are all the
   cookies
   that you have set on me so far. (Cookie: user_auth=true; expires=Thu, 1-Jan-2020 20:00:00 GMT;
   marketing_page_visit_count=1; user_ip=192.1.234.21)

[//]: # 2.jwt(json web token)
authentication method that store it in the browser(usually localStorage)
user and can only be decoded using a secret that is stored on the server.

[//]: # 3.OAuth
OAuth and OpenId that is a modern authentication method that generated from other applications

[//]: # Passport
passport js has over 500 authentication "strategies" like passport-amazon,...
No, Passport.js is not specifically a JWT method, but rather an authentication middleware for Node.js that supports
various authentication strategies, including JWT.

What is Passport.js?
Passport.js is a flexible and modular middleware designed to authenticate requests in a Node.js application. It provides
different strategies to authenticate users, including:
.Local strategy (using username and password) crypto
.OAuth strategies (like Google, Facebook, GitHub)
.JWT strategy

Passport.js can work with JWT through the passport-jwt strategy

# Difference Between Passport and JWT

1) Passport.js is a middleware that allows you to implement authentication using various strategies
2) JWT (JSON Web Token) is <method> a token format used for securely transmitting information between parties, often
   used for
   stateless authentication.

# passport strategies!

https://www.passportjs.org/packages/
<h5>

* each strategy uses the passport.js framework as a template.<br>
* the passport local strategy utilize<used> cookies,Express session, and some authentication logic.