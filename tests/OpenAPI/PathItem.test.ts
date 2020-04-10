import {ExternalDocumentation} from "@flaksp/specificator";
import {Operation} from "@flaksp/specificator";
import {PathItem} from "@flaksp/specificator";
import {Reference} from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("PathItem should be serializable", () => {
    const operation = new Operation({
        callbacks: {},
        deprecated: true,
        description: "Test description",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        operationId: "test_operation",
        parameters: [],
        requestBody: new Reference({
            $ref: "#/foo",
        }),
        responses: {},
        security: [],
        servers: [],
        summary: "Test summary",
        tags: [],
    });

    const object = new PathItem({
        $ref: "https://example.com/test",
        delete: operation,
        description: "Test description",
        get: operation,
        head: operation,
        options: operation,
        parameters: [],
        patch: operation,
        post: operation,
        put: operation,
        servers: [],
        summary: "Test summary",
        trace: operation,
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        $ref: "https://example.com/test",
        delete: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        description: "Test description",
        get: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        head: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        options: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        parameters: [],
        patch: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        post: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        put: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
        servers: [],
        summary: "Test summary",
        trace: {
            callbacks: {},
            deprecated: true,
            description: "Test description",
            externalDocs: {
                description: "Test description",
                url: "https://example.com/test",
            },
            operationId: "test_operation",
            parameters: [],
            requestBody: {
                $ref: "#/foo",
            },
            responses: {},
            security: [],
            servers: [],
            summary: "Test summary",
            tags: [],
        },
    });
});
