import {Header} from "specificator";
import {StringSchema} from "specificator";
import {Serializer} from "../../src/Serializer";

test("Header should be serializable", () => {
    const object = new Header({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        required: true,
        schema: new StringSchema({
            default: "Test default",
            deprecated: false,
            example: "Test example",
            maxLength: 100,
            minLength: 50,
            nullable: false,
            pattern: "^test$",
            readOnly: false,
            writeOnly: false,
        }),
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        required: true,
        schema: {
            default: "Test default",
            deprecated: false,
            example: "Test example",
            maxLength: 100,
            minLength: 50,
            nullable: false,
            pattern: "^test$",
            readOnly: false,
            type: "string",
            writeOnly: false,
        },
    });
});
