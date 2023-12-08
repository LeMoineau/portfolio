export namespace SearchUtils {
    export function findInString(src: string, toFind: string): boolean {
        return src.toLowerCase().includes(toFind.trim().toLowerCase())
    }

    export function findInStringArray(src: string[], toFind: string): boolean {
        for (let s of src) {
            if (findInString(s, toFind)) return true
        }
        return false
    }
}
