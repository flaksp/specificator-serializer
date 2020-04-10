import {Server} from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("Server should be serializable", () => {
    const object = new Server({
        description: "Test description",
        url: "https://example.com/test",
        variables: {},
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        url: "https://example.com/test",
        variables: {},
    });
});
