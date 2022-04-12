export class Livraison {


  public constructor(
    private _id?: number|undefined ,
    private _modeLivraion?: string| undefined,
    private _description?: string| undefined,
    private _prix?: number| undefined,
  ) {}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get modeLivraion(): string | undefined{
    return this._modeLivraion;
  }

  public set modeLivraion(value: string| undefined) {
    this._modeLivraion = value;
  }

  public get description(): string | undefined{
    return this._description;
  }

  public set description(value: string| undefined) {
    this._description = value;
  }
  public get prix(): number| undefined {
    return this._prix;
  }

  public set prix(value: number| undefined) {
    this._prix = value;
  }


}
