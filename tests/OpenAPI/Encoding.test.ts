import {Encoding} from "specificator";
import {Serializer} from "../../src/Serializer";

test("Encoding should be serializable", () => {
    const object = new Encoding({
        allowReserved: true,
        contentType: "application/json",
        headers: {},
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        allowReserved: true,
        contentType: "application/json",
        headers: {},
    });
});
