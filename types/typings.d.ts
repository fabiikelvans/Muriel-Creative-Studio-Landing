export interface Menu {
    name: string,
    id: string,
}

export interface Parent {
    url: string,
    token?: string | null,
    headers?: string | null,

}