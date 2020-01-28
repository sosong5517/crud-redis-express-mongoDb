![](https://github.com/EduardoRotundaro/crud-api-express-mongo/blob/master/docs/images/01.png?raw=true)

# CRUD API w/ Express.js and MongoDB and redis

A backend application using Node.js with the Express framework, that implements a simple CRUD with the MongoDB and redis.

---

## Stack

| Lib | Version |
| ------ | ------ |
| express | 4.16.4 |
| mongoose | 5.4.17 |
| redis    | ^2.8.0 |
 

---

## Running

**After clone**

```sh
$ cd crud-api-express-mongo
$ npm install
```

**Starting the application**

```sh
$ npm start
```

or

```sh
$ node index.js
```

---

## Routes

* New to-do item
```sh
method: "POST"
url: "/server/to-do/new"
body: {
    "description": <String>
    "noTelp":<string>
}
```

* Edit a to-do item
```sh
method: "PUT"
url: "/server/to-do/edit-description/:ID"
body: {
    "description": <String>
    "noTelp":<string>
}
```

* Set a to-do item as done
```sh
method: "PUT"
url: "/server/to-do/set-as-done/:ID"
```

* Set a to-do item as pending
```sh
method: "PUT"
url: "/server/to-do/set-as-pending/:ID"
```

* Delete a to-do item
```sh
method: "DELETE"
url: "/server/to-do/remove"
```
body: {
        "noTelp":<string>

}


* Delete all to-do itens
```sh
method: "DELETE"
url: "/server/to-do/remove-all"
```

* Get all to-do itens
```sh
method: GET
url: "/server/to-do/"
```


