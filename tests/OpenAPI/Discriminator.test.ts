import {Discriminator} from "specificator";
import {Serializer} from "../../src/Serializer";

test("Discriminator should be serializable", () => {
    const object = new Discriminator({
        mapping: {
            bar: "#/components/bar",
            foo: "#/components/test",
        },
        propertyName: "type",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        mapping: {
            bar: "#/components/bar",
            foo: "#/components/test",
        },
        propertyName: "type",
    });
});
