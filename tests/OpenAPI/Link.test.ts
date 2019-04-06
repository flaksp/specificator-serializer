import {Link} from "specificator";
import {Server} from "specificator";
import {Serializer} from "../../src/Serializer";

test("Link should be serializable", () => {
    const object = new Link({
        description: "Test description",
        operationId: "foo",
        operationRef: "#/foo",
        parameters: {},
        requestBody: "foo",
        server: new Server({
            description: "Test description",
            url: "https://example.com/test",
            variables: {},
        }),
    });

    const serializer = new Serializer();

    expect(serializer.serialize(object)).toEqual({
        description: "Test description",
        operationId: "foo",
        operationRef: "#/foo",
        parameters: {},
        requestBody: "foo",
        server: {
            description: "Test description",
            url: "https://example.com/test",
            variables: {},
        },
    });
});
