import {ResourceOwnerPasswordOAuthFlow} from "@flaksp/specificator";
import {Serializer} from "../../../src/Serializer";

test("ResourceOwnerPasswordOAuthFlow should be serializable", () => {
    const object = new ResourceOwnerPasswordOAuthFlow({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl: "https://example.com/test",
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        refreshUrl: "https://example.com/test",
        scopes: {},
        tokenUrl: "https://example.com/test",
    });
});
