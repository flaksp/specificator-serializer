import {SerializableInterface, SerializerInterface} from "@flaksp/specificator";

interface SerializerConfigurationInterface {
    /**
     * Sort all object keys alphabetically.
     */
    sortObjectKeysAlphabetically?: boolean;
}

export class Serializer implements SerializerInterface {

    public constructor(configuration?: SerializerConfigurationInterface) {
        if (configuration === undefined) {
            return;
        }

        if (configuration.sortObjectKeysAlphabetically !== undefined) {
            this.sortObjectKeysAlphabetically = configuration.sortObjectKeysAlphabetically;
        }
    }

    private readonly sortObjectKeysAlphabetically: boolean = false;

    private static isSerializable(value: any): value is SerializableInterface {
        return (value as SerializableInterface).serialize !== undefined;
    }

    private static sortObjectKeysAlphabetically(unsortedObject: {[key: string]: any}): object {
        return Object.keys(unsortedObject)
            .sort()
            .reduce((acc: object, key: string) => {
                return {
                    ...acc,
                    [key]: typeof unsortedObject[key] === "object" && Array.isArray(unsortedObject[key]) === false
                        ? Serializer.sortObjectKeysAlphabetically(unsortedObject[key])
                        : unsortedObject[key],
                };
            }, {});
    }

    public serialize(openApiObject: SerializableInterface): object {
        let serializedObject = openApiObject.serialize();

        for (const serializedObjectKey in serializedObject) {
            if (Serializer.isSerializable(serializedObject[serializedObjectKey])) {
                serializedObject[serializedObjectKey] = this.serialize(serializedObject[serializedObjectKey]);
            }
        }

        if (this.sortObjectKeysAlphabetically) {
            serializedObject = Serializer.sortObjectKeysAlphabetically(serializedObject);
        }

        return serializedObject;
    }
}
