export interface IApiAuthUserMetadataTs {
  accessToken: string;
  tokenType: string;
  usuario_id: number,
  username: string;
  authorities: {authority:string}[];
}
