import {ImplicitOAuthFlow} from "@flaksp/specificator";
import {Serializer} from "../../../src/Serializer";

test("ImplicitOAuthFlow should be serializable", () => {
    const object = new ImplicitOAuthFlow({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
    });
});
