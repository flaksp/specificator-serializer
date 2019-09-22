import {Components} from "@neluzhin/specificator";
import {Contact} from "@neluzhin/specificator";
import {ExternalDocumentation} from "@neluzhin/specificator";
import {Info} from "@neluzhin/specificator";
import {License} from "@neluzhin/specificator";
import {OpenAPI} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("OpenAPI should be serializable", () => {
    const object = new OpenAPI({
        components: new Components({
            callbacks: {},
            examples: {},
            headers: {},
            links: {},
            parameters: {},
            requestBodies: {},
            responses: {},
            schemas: {},
            securitySchemes: {},
        }),
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
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
        security: [],
        servers: [],
        tags: [],
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        components: {
            callbacks: {},
            examples: {},
            headers: {},
            links: {},
            parameters: {},
            requestBodies: {},
            responses: {},
            schemas: {},
            securitySchemes: {},
        },
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        info: {
            contact: {
                email: "test@example.com",
                name: "Test name",
                url: "https://example.com/test",
            },
            description: "Test description",
            license: {
                name: "Test license",
                url: "https://example.com/test",
            },
            termsOfService: "https://example.com/test",
            title: "Test title",
            version: "1.0.0",
        },
        openapi: "3.0.2",
        paths: {},
        security: [],
        servers: [],
        tags: [],
    });
});
