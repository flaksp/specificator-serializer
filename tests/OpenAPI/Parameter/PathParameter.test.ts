import {PathParameter} from "@neluzhin/specificator";
import {Reference} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("PathParameter should be serializable", () => {
    const object = new PathParameter({
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        name: "test",
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
        in: "path",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
