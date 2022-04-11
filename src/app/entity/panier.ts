import { Compte } from 'src/app/entity/compte';
import { Produit } from './produit';
export class Panier {

  public constructor(
    private _id?: number|undefined ,
    private _quantite?: number| undefined,
    private _achat?: boolean| undefined,
    private _dateAchat?: Date| undefined,
    private _compte?: Compte| undefined,
    private _produit? : Produit|undefined
  ) {}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get quantite(): number | undefined{
    return this._quantite;
  }

  public set quantite(value: number| undefined) {
    this._quantite = value;
  }
  public get achat(): boolean | undefined{
    return this._achat;
  }

  public set achat(value: boolean| undefined) {
    this._achat = value;
  }
  public get dateAchat(): Date | undefined{
    return this._dateAchat;
  }

  public set dateAchat(value: Date| undefined) {
    this._dateAchat = value;
  }

  public get compte(): Compte| undefined {
    return this._compte;
  }

  public set compte(value: Compte| undefined) {
    this._compte = value ;
  }

  public get produit(): Produit| undefined {
    return this._produit;
  }

  public set produit(value: Produit| undefined) {
    this._produit = value ;
  }


}

