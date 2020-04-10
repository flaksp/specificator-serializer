import {RequestBody} from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("RequestBody should be serializable", () => {
    const object = new RequestBody({
        content: {},
        description: "Test description",
        required: true,
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        content: {},
        description: "Test description",
        required: true,
    });
});
