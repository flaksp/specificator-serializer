import {ServerVariable} from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("ServerVariable should be serializable", () => {
    const object = new ServerVariable({
        default: "foo",
        description: "Test description",
        enum: ["foo", "bar"],
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        default: "foo",
        description: "Test description",
        enum: ["foo", "bar"],
    });
});
