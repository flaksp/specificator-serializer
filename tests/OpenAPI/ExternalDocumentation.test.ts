import {ExternalDocumentation} from "specificator";
import {Serializer} from "../../src/Serializer";

test("ExternalDocumentation should be serializable", () => {
    const object = new ExternalDocumentation({
        description: "Test description",
        url: "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        url: "https://example.com/test",
    });
});
