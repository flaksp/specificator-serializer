import {Response} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("Response should be serializable", () => {
    const object = new Response({
        content: {},
        description: "Test description",
        headers: {},
        links: {},
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        content: {},
        description: "Test description",
        headers: {},
        links: {},
    });
});
