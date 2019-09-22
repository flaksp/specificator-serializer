import {ExternalDocumentation} from "@neluzhin/specificator";
import {Reference} from "@neluzhin/specificator";
import {ArraySchema} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("ArraySchema should be serializable", () => {
    const object = new ArraySchema({
        anyOf: [],
        deprecated: true,
        description: "Test description",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        items: new Reference({
            $ref: "#/test",
        }),
        maxItems: 5,
        minItems: 1,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        uniqueItems: true,
        writeOnly: false,
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        anyOf: [],
        deprecated: true,
        description: "Test description",
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        items: {
            $ref: "#/test",
        },
        maxItems: 5,
        minItems: 1,
        not: [],
        nullable: true,
        oneOf: [],
        readOnly: true,
        title: "Test title",
        type: "array",
        uniqueItems: true,
        writeOnly: false,
    });
});
