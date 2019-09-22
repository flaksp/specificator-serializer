import {OpenIdConnectSecurityScheme} from "@neluzhin/specificator";
import {Serializer} from "../../../src/Serializer";

test("OpenIdConnectSecurityScheme should be serializable", () => {
    const object = new OpenIdConnectSecurityScheme({
        description: "Test description",
        openIdConnectUrl: "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        openIdConnectUrl: "https://example.com/test",
        type: "openIdConnect",
    });
});
