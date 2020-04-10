import {ClientCredentialsOAuthFlow} from "@flaksp/specificator";
import {Serializer} from "../../../src/Serializer";

test("ClientCredentialsOAuthFlow should be serializable", () => {
    const object = new ClientCredentialsOAuthFlow({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl:  "https://example.com/test",
    });
});
