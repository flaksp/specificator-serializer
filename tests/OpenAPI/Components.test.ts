import {Components} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("Components should be serializable", () => {
    const object = new Components({
        callbacks: {},
        examples: {},
        headers: {},
        links: {},
        parameters: {},
        requestBodies: {},
        responses: {},
        schemas: {},
        securitySchemes: {},
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        callbacks: {},
        examples: {},
        headers: {},
        links: {},
        parameters: {},
        requestBodies: {},
        responses: {},
        schemas: {},
        securitySchemes: {},
    });
});
