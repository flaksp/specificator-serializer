import {MediaType} from "specificator";
import {StringSchema} from "specificator";
import {Serializer} from "../../src/Serializer";

test("MediaType should be serializable", () => {
    const object = new MediaType({
        encoding: {},
        example: "Test example",
        examples: {},
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
        encoding: {},
        example: "Test example",
        examples: {},
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
