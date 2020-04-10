import {AuthorizationCodeOAuthFlow} from "@flaksp/specificator";
import {Serializer} from "../../../src/Serializer";

test("AuthorizationCodeOAuthFlow should be serializable", () => {
    const object = new AuthorizationCodeOAuthFlow({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        authorizationUrl: "https://example.com/test",
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });
});
