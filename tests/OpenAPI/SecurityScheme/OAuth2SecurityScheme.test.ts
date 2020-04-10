import {AuthorizationCodeOAuthFlow} from "@flaksp/specificator";
import {ClientCredentialsOAuthFlow} from "@flaksp/specificator";
import {ImplicitOAuthFlow} from "@flaksp/specificator";
import {ResourceOwnerPasswordOAuthFlow} from "@flaksp/specificator";
import {OAuthFlows} from "@flaksp/specificator";
import {OAuth2SecurityScheme} from "@flaksp/specificator";
import {Serializer} from "../../../src/Serializer";

test("OAuth2SecurityScheme should be serializable", () => {
    const object = new OAuth2SecurityScheme({
        description: "Test description",
        flows: new OAuthFlows({
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
        }),
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        flows: {
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
        },
        type: "oauth2",
    });
});
