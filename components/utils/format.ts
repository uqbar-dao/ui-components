export const removeDots = (str: string) => str.replace(/\./g, '')

export const abbreviateHex = (hash: string, start: number = 10, end: number = 8) => `${removeDots(hash).slice(0, start)}...${removeDots(hash).slice(-end)}`

export const capitalize = (word?: string) => !word ? word : word[0].toUpperCase() + word.slice(1).toLowerCase()
