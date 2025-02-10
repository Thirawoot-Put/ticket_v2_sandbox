POST http://{{base_url}}/auth/register

{
  "email": "test5@mail.com",
  "name":"test 5",
  "password": "1234"
}

POST http://{{base_url}}/auth/login

{
  "email": "test5@mail.com",
  "password": "123"
}

