export type ResidentType = {
  status: string,
  image: string,
  name: string,
  id: string,
}

export type ResidentsType = {
  residents: ResidentType[]
}

export type Location = {
  name: string;
  type: string;
  residents: ResidentsType;
}