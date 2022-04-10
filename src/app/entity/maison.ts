export class Maison {

  public constructor(
    private _id?: number|undefined ,
    private _nom?: string| undefined,
    private _score?: number| undefined,

  ) {}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get nom(): string | undefined{
    return this._nom;
  }

  public set nom(value: string| undefined) {
    this._nom = value;
  }
  public get score(): number| undefined {
    return this._score;
  }

  public set score(value: number| undefined) {
    this._score = value;
  }

}
