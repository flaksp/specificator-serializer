import {Contact} from "@flaksp/specificator";
import {Info} from "@flaksp/specificator";
import {License} from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("Info should be serializable", () => {
    const object = new Info({
        contact: new Contact({
            email: "test@example.com",
            name: "Test name",
            url: "https://example.com/test",
        }),
        description: "Test description",
        license: new License({
            name: "Test license",
            url: "https://example.com/test",
        }),
        termsOfService: "https://example.com/test",
        title: "Test title",
        version: "1.0.0",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        contact: {
            email: "test@example.com",
            name: "Test name",
            url: "https://example.com/test",
        },
        description: "Test description",
        license: {
            name: "Test license",
            url: "https://example.com/test",
        },
        termsOfService: "https://example.com/test",
        title: "Test title",
        version: "1.0.0",
    });
});
