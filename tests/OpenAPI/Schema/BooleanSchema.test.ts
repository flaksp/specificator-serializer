import {ExternalDocumentation} from "@neluzhin/specificator";
import {BooleanSchema} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("BooleanSchema should be serializable", () => {
    const object = new BooleanSchema({
        anyOf: [],
        default: true,
        deprecated: true,
        description: "Test description",
        example: true,
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
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
        default: true,
        deprecated: true,
        description: "Test description",
        example: true,
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "boolean",
        writeOnly: false,
    });
});
