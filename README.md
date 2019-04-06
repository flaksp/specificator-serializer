# Specificator serializer

[![Coverage Status](https://coveralls.io/repos/github/neluzhin/specificator-serializer/badge.svg?branch=master)](https://coveralls.io/github/neluzhin/specificator-serializer?branch=master)
[![NPM downloads](https://img.shields.io/npm/dm/specificator-serializer.svg)](https://www.npmjs.com/package/specificator-serializer)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg?maxAge=604800)](https://renovatebot.com/)

> **Achtung!** This library is in early development state so it's unstable. It works now, but there are no guarantees for API stability (it may change during development). We are testing this library inside our projects and adopting some features to make it feel better. Please wait for version 1.0 and don't use it inside real projects.

This library is default serializer for [Specificator](https://github.com/neluzhin/specificator).

## Documentation

### Installation

```console
npm install --save-dev specificator-serializer
```

### Usage

Simple example:

```typescript
import {Serializer} from "specificator-serializer";
import {Contact, Info, License, OpenAPI} from "specificator";

const documentationSchema = new OpenAPI({
    info: new Info({
        contact: new Contact({
            email: "test@example.com",
            name: "Test name",
            url: "https://example.com/test",
        }),
        description: "Test description",
        license: new License({
            name: "Test license",
            url: "https://example.com/test",
        }),
        termsOfService: "https://example.com/test",
        title: "Test title",
        version: "1.0.0",
    }),
    paths: {},
});

const serializer = new Serializer();

const serializedDocumentation = serializer.serialize(documentationSchema);
const serializedDocumentationJson = JSON.stringify(serializedDocumentation);

console.log(serializedDocumentationJson); // prints your documentation in JSON
```

### Configuration

`Serializer` constructor accepts optional configuration object. Example:

```typescript
import {Serializer} from "specificator-serializer";

const serializer = new Serializer({
    sortObjectKeysAlphabetically: true
});
```

Possible configuration parameters are listed below.

#### `sortObjectKeysAlphabetically`

**Boolean.** Sort all object keys alphabetically. Defaults to `false`.

## Creating your own serializer

There may be a case when this serializer will not cover all your cases. If you want to create your own serializer, it should implement [`SerializerInterface`](https://github.com/neluzhin/specificator/blob/master/src/Serializer/SerializerInterface.ts) to make it feel consistent between all existing implementations.

Also it's recommended to add [`specificator`](https://www.npmjs.com/search?q=keywords:specificator) & [`specificator-serializer`](https://www.npmjs.com/search?q=keywords:specificator-serializer) keywords to your package.json file and [`specificator`](https://github.com/topics/specificator) & [`specificator-serializer`](https://github.com/topics/specificator-serializer) topics to your GitHub repository for better discoverability.
