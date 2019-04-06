import {SerializableInterface, SerializerInterface} from "specificator";

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
            .reduce((acc: object, key: string) => ({
                ...acc, [key]: unsortedObject[key],
            }), {});
    }

    public serialize(openApiObject: SerializableInterface): object {
        let serializedObject = openApiObject.serialize();

        if (this.sortObjectKeysAlphabetically) {
            serializedObject = Serializer.sortObjectKeysAlphabetically(serializedObject);
        }

        for (const serializedObjectKey in serializedObject) {
            if (Serializer.isSerializable(serializedObject[serializedObjectKey])) {
                serializedObject[serializedObjectKey] = this.serialize(serializedObject[serializedObjectKey]);
            }
        }

        return serializedObject;
    }
}
