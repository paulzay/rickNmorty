export type EpisodeType = {
  name: string,
  episode: string,
}

export type ResidentType = {
  status: string,
  image: string,
  name: string,
  id: string,
  episode: EpisodeType[],
}

export type Location = {
  name: string;
  type: string;
  residents: ResidentType[];
}