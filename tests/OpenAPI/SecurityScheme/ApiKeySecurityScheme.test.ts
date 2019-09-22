import {ApiKeySecurityScheme} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("ApiKeySecurityScheme should be serializable", () => {
    const object = new ApiKeySecurityScheme({
        description: "Test description",
        in: "query",
        name: "test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        in: "query",
        name: "test",
        type: "apiKey",
    });
});
