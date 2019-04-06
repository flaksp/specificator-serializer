import {ExternalDocumentation} from "specificator";
import {IntegerSchema} from "specificator";
import {Serializer} from "../../../src/Serializer";

test("IntegerSchema should be serializable", () => {
    const object = new IntegerSchema({
        anyOf: [],
        default: 500,
        deprecated: true,
        description: "Test description",
        example: 500,
        exclusiveMaximum: 1000,
        exclusiveMinimum: 100,
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        format: "int32",
        maximum: 1000,
        minimum: 100,
        multipleOf: 10,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        writeOnly: false,
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        anyOf: [],
        default: 500,
        deprecated: true,
        description: "Test description",
        example: 500,
        exclusiveMaximum: 1000,
        exclusiveMinimum: 100,
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        format: "int32",
        maximum: 1000,
        minimum: 100,
        multipleOf: 10,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "integer",
        writeOnly: false,
    });
});
