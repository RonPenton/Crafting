export type Dict<T> = { [index: string]: T };
export type Named = { name: string };

export function nameify<T extends Named>(dict: Dict<T>) {
    for (var prop in dict) {
        document.writeln(dict[prop].name = prop);
    }
    return dict;
}