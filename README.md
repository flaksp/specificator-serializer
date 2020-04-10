# Specificator serializer

[![Coverage Status](https://coveralls.io/repos/github/flaksp/specificator-serializer/badge.svg?branch=master)](https://coveralls.io/github/flaksp/specificator-serializer?branch=master)

> **Achtung!** This library is in early development state so it's unstable. It works now, but there are no guarantees for API stability (it may change during development). We are testing this library inside our projects and adopting some features to make it feel better. Please wait for version 1.0 and don't use it inside real projects.

This library is default serializer for [Specificator](https://github.com/flaksp/specificator).

## Documentation

### Installation

Install from [npm Registry](https://www.npmjs.com/package/@flaksp/specificator-serializer):

```console
npm install --save-dev @flaksp/specificator-serializer
```

The package is also available in [GitHub Package Registry](https://github.com/flaksp/specificator-serializer/packages).

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
