import {Discriminator} from "@neluzhin/specificator";
import {ExternalDocumentation} from "@neluzhin/specificator";
import {ObjectSchema} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("ObjectSchema should be serializable", () => {
    const object = new ObjectSchema({
        additionalProperties: false,
        anyOf: [],
        deprecated: true,
        description: "Test description",
        discriminator: new Discriminator({
            mapping: {
                bar: "#/components/bar",
                foo: "#/components/test",
            },
            propertyName: "type",
        }),
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        maxProperties: 5,
        minProperties: 1,
        not: [],
        nullable: true,
        oneOf: [],
        properties: {},
        readOnly: true,
        required: [],
        title: "Test title",
        writeOnly: false,
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        additionalProperties: false,
        anyOf: [],
        deprecated: true,
        description: "Test description",
        discriminator: {
            mapping: {
                bar: "#/components/bar",
                foo: "#/components/test",
            },
            propertyName: "type",
        },
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        maxProperties: 5,
        minProperties: 1,
        not: [],
        nullable: true,
        oneOf: [],
        properties: {},
        readOnly: true,
        required: [],
        title: "Test title",
        type: "object",
        writeOnly: false,
    });
});
