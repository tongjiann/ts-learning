interface IPerson {
    readonly id: number
    name: string
    age: number
    sex?: string
    [propName: string]: any
}
