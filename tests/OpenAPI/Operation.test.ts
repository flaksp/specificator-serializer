import {ExternalDocumentation} from "@neluzhin/specificator";
import {Operation} from "@neluzhin/specificator";
import {Reference} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("Operation should be serializable", () => {
    const object = new Operation({
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

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
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
    });
});
