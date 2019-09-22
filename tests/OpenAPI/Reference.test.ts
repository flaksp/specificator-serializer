import {Reference} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("Reference should be serializable", () => {
    const object = new Reference({
        $ref: "#/foo/bar",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        $ref: "#/foo/bar",
    });
});
