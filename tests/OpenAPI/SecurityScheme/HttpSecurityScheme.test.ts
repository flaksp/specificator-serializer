import {HttpSecurityScheme} from "specificator";
import {Serializer} from "../../../src/Serializer";

test("HttpSecurityScheme should be serializable", () => {
    const object = new HttpSecurityScheme({
        bearerFormat: "JWT",
        description: "Test description",
        scheme: "Bearer",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        bearerFormat: "JWT",
        description: "Test description",
        scheme: "Bearer",
        type: "http",
    });
});
