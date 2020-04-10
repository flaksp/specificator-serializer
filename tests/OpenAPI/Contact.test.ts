import {Contact} from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("Contact should be serializable", () => {
    const object = new Contact({
        email: "test@example.com",
        name: "Test name",
        url: "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        email: "test@example.com",
        name: "Test name",
        url: "https://example.com/test",
    });
});
