import { Prof } from './prof';
export class Cours {

  public constructor (
    private _id ?: number |undefined,
    private _intitule ?: string |undefined,
    private _professeur ?: Prof |undefined,
  ){}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get intitule(): string | undefined{
    return this._intitule;
  }

  public set intitule(value: string| undefined) {
    this._intitule = value;
  }
  public get professeur(): Prof | undefined{
    return this._professeur;
  }

  public set professeur(value: Prof| undefined) {
    this._professeur = value;
  }

}
