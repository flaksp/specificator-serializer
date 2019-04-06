import {ExternalDocumentation} from "specificator";
import {Tag} from "specificator";
import {Serializer} from "../../src/Serializer";

test("Tag should be serializable", () => {
    const object = new Tag({
        description: "Test description",
        externalDocs: new ExternalDocumentation({
            description: "Test description",
            url: "https://example.com/test",
        }),
        name: "Test name",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        externalDocs: {
            description: "Test description",
            url: "https://example.com/test",
        },
        name: "Test name",
    });
});
