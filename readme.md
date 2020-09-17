# Introduction

This project using New York Times API to get Article and Book List API.

# Getting Started

Before you getting started using this project.

1. Sign Up to NYT developer console to get API KEY.
2. copy and create .env from .env.example.
3. paste your API_KEY in .env.
4. `npm install or yarn install`
5. run the project `npm run start` or `yarn start`

# Api Documentation

## Get Article

Get the article based on match character

**URL** : `/search-article`.
**Method** : `GET`.
**Permissions required** : None.
**Params** :
`search=string` optional,
`sort=oldest|newest` optional,
`page=number` optional,

**Content examples**

```json
{
    "status": "success",
    "data": {},
    "meta": {}
}
```

## Get HardCover Fiction Book Lists

Get the booklist of HardCover Fiction

**URL** : `/book/hardcover-fiction`
**Method** : `GET`
**Permissions required** : None
**Params** :
`search=string` optional,
`date=YYYY-MM-DD or "current"` optional default current,

**Content examples**

```json
{
  "status": "success",
  "data": {
    "listName": "HardCover Fiction",
    "total": 15,
    "books": []
  }
}
```

## Get EBook Fiction Book Lists

Get the booklist of Ebook Fiction

**URL** : `/book/ebook-fiction`
**Method** : `GET`
**Permissions required** : None
**Params** :
`search=string` optional,
`date=YYYY-MM-DD or "current"` optional, default current,

**Content examples**

```json
{
  "status": "success",
  "data": {
    "listName": "E-Book Fiction",
    "total": 15,
    "books": []
  }
}
```
