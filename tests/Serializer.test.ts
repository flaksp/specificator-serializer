import {RequestBody} from "specificator";
import {Serializer} from "../src/Serializer";

test("Serializer should be able to sort object keys alphabetically", () => {
    const object = new RequestBody({
        required: true,
        description: "Test description",
        content: {},
    });

    const serializer = new Serializer({
        sortObjectKeysAlphabetically: true
    });

    const expectedJson = JSON.stringify(serializer.serialize(object));
    const actualJson = JSON.stringify({
        content: {},
        description: "Test description",
        required: true,
    });

    expect(expectedJson).toEqual(actualJson);
});
