import { Categorie } from './categorie';
export class Boutique {
  public constructor(
    private _id?: number | undefined,
    private _nom?: string | undefined,
    private _adresse?: string | undefined,
    private _categorie?: Categorie | undefined
  ) {}

  public get id(): number | undefined {
    return this._id;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }

  public get nom(): string | undefined {
    return this._nom;
  }

  public set nom(value: string | undefined) {
    this._nom = value;
  }
  public get adresse(): string | undefined {
    return this._adresse;
  }

  public set adresse(value: string | undefined) {
    this._adresse = value;
  }
  public get categorie(): Categorie | undefined {
    return this._categorie;
  }

  public set heure(value: Categorie | undefined) {
    this._categorie = value;
  }
}
