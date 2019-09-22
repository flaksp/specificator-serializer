import {Example} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("Example should be serializable", () => {
    const object = new Example({
        description: "Test description",
        externalValue: "Test externalValue",
        summary: "Test summary",
        value: "Test value",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        externalValue: "Test externalValue",
        summary: "Test summary",
        value: "Test value",
    });
});
