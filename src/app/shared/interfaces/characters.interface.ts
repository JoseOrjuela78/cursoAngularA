export interface ICharacter{
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: ILocation;
  name: string;
  origin: IOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}


export interface ILocation{
  name:string;
  url:string
}

export interface IOrigin{
  name:string;
  url:string
}


export interface IResultsCharacters{
  info:any;
  results:Array<ICharacter>;
}
