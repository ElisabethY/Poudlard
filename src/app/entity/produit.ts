import { Boutique } from './boutique';
export class Produit {

  public constructor(
    private _id?: number|undefined ,
    private _libelle?: string| undefined,
    private _description?: string| undefined,
    private _prix?: number| undefined,
    private _boutique?: Boutique| undefined,
  ) {}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get libelle(): string | undefined{
    return this._libelle;
  }

  public set libelle(value: string| undefined) {
    this._libelle = value;
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
  public get boutique(): Boutique| undefined {
    return this._boutique;
  }

  public set boutique(value: Boutique| undefined) {
    this._boutique = value ;
  }
}

