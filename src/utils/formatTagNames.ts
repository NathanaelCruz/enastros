export const formatTagNames = (tagName: string): string => {
    const normalizeTagName = tagName
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase()

    return normalizeTagName
}
