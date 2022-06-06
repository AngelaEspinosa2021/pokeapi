export interface Pokemon{
    image: string,
    abilities: Ability[]
}

export interface Ability{
    ability: Species
}

export interface Species{
    name: string
}