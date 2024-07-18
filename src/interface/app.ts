export type ITask = {
    id: number,
    description: string
    completed: boolean
}
export const DEFAULT_TODOS = [
    { id: 1, description: 'Learn Angular', completed: false },
    { id: 2, description: 'Learn React', completed: true },
    { id: 3, description: 'Learn Vue', completed: false }
]
/*
{
    "flags": {
      "png": "https://flagcdn.com/w320/gs.png",
      "svg": "https://flagcdn.com/gs.svg",
      "alt": ""
    },
    "name": {
      "common": "South Georgia",
      "official": "South Georgia and the South Sandwich Islands",
      "nativeName": {
        "eng": {
          "official": "South Georgia and the South Sandwich Islands",
          "common": "South Georgia"
        }
      }
    }
  },
  */
export type ICountry = {
    flags: {
        png: string,
        svg: string,
        alt: string
    },
    name: {
        common: string,
        official: string,
        nativeName: {
            eng: {
                official: string,
                common: string
            }
        }
    }
}