import {AuthorizationCodeOAuthFlow} from "@neluzhin/specificator";
import {ClientCredentialsOAuthFlow} from "@neluzhin/specificator";
import {ImplicitOAuthFlow} from "@neluzhin/specificator";
import {ResourceOwnerPasswordOAuthFlow} from "@neluzhin/specificator";
import {OAuthFlows} from "@neluzhin/specificator";
import {Serializer} from "../../src/Serializer";

test("OAuthFlows should be serializable", () => {
    const object = new OAuthFlows({
        authorizationCode: new AuthorizationCodeOAuthFlow({
            authorizationUrl: "https://example.com/test",
            refreshUrl: "https://example.com/test",
            scopes: {},
            tokenUrl: "https://example.com/test",
        }),
        clientCredentials: new ClientCredentialsOAuthFlow({
            refreshUrl: "https://example.com/test",
            scopes: {},
            tokenUrl: "https://example.com/test",
        }),
        implicit: new ImplicitOAuthFlow({
            authorizationUrl: "https://example.com/test",
            refreshUrl: "https://example.com/test",
            scopes: {},
        }),
        password: new ResourceOwnerPasswordOAuthFlow({
            refreshUrl: "https://example.com/test",
            scopes: {},
            tokenUrl: "https://example.com/test",
        }),
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        authorizationCode: {
            authorizationUrl: "https://example.com/test",
            refreshUrl: "https://example.com/test",
            scopes: {},
            tokenUrl: "https://example.com/test",
        },
        clientCredentials: {
            refreshUrl: "https://example.com/test",
            scopes: {},
            tokenUrl: "https://example.com/test",
        },
        implicit: {
            authorizationUrl: "https://example.com/test",
            refreshUrl: "https://example.com/test",
            scopes: {},
        },
        password: {
            refreshUrl: "https://example.com/test",
            scopes: {},
            tokenUrl: "https://example.com/test",
        },
    });
});
