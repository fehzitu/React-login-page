## 🖥️ Tests:

## ```GET```**:**
```Usage and response:```
```shell
curl http://localhost:3000/
response 'Try /login'
```
```Request data:```
```shell
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 23
ETag: W/"17-HyM7PAw5/D8isqan8YQMvz+gtXI"
Date: Wed, 18 Feb 2026 19:32:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Try /login
```

## ```POST```**:**
```Usage and response:```
```shell
curl -i -X POST http://localhost:3000/login
response 'Login endpoint 📁'
```
```Request data:```
```shell
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 19
ETag: W/"13-zqNPwFgag4xqo6Vvgh00S9mJe8Y"
Date: Wed, 18 Feb 2026 19:42:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Login endpoint 📁
```