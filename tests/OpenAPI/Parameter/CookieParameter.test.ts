import {CookieParameter} from "@neluzhin/specificator";
import {Reference} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("CookieParameter should be serializable", () => {
    const object = new CookieParameter({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        name: "test",
        required: true,
        schema: new Reference({
            $ref: "#/foo/bar",
        }),
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        in: "cookie",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
