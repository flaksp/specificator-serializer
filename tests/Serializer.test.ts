import {RequestBody, StringSchema} from "@neluzhin/specificator";
import {Serializer} from "../src/Serializer";

test("Serializer should sort objects if sortObjectKeysAlphabetically option is true", () => {
    const object = new StringSchema({
        enum: [
            "Dog",
            "Cat"
        ],
        description: "Test description",
    });

    const serializer = new Serializer({
        sortObjectKeysAlphabetically: true
    });

    const expectedJson = JSON.stringify(serializer.serialize(object));
    const actualJson = JSON.stringify({
        description: "Test description",
        enum: [
            "Dog",
            "Cat"
        ],
        type: "string",
    });

    expect(expectedJson).toEqual(actualJson);
});

test("Serializer should not sort objects if sortObjectKeysAlphabetically option is false", () => {
    const object = new RequestBody({
        required: true,
        description: "Test description",
        content: {},
    });

    const serializer = new Serializer({
        sortObjectKeysAlphabetically: false
    });

    const expectedJson = JSON.stringify(serializer.serialize(object));
    const actualJson = JSON.stringify({
        content: {},
        description: "Test description",
        required: true,
    });

    expect(expectedJson).toEqual(actualJson);
});
