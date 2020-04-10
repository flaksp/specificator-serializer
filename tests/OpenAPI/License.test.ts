import { License } from "@flaksp/specificator";
import {Serializer} from "../../src/Serializer";

test("Licence should be serializable", () => {
    const object = new License({
        name: "Test license",
        url: "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        name: "Test license",
        url: "https://example.com/test",
    });
});
