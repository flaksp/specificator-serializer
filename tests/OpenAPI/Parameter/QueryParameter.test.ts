import {QueryParameter} from "@neluzhin/specificator";
import {Reference} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("QueryParameter should be serializable", () => {
    const object = new QueryParameter({
        allowReserved: true,
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
        allowReserved: true,
        content: {},
        deprecated: true,
        description: "Test description",
        example: "Test example",
        examples: {},
        in: "query",
        name: "test",
        required: true,
        schema: {
            $ref: "#/foo/bar",
        },
    });
});
