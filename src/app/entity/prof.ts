import { Compte } from './compte';
import { Maison } from './maison';

export class Prof extends Compte {
  public constructor(
    id?: number | undefined,
    login?: string | undefined,
    nom?: string | undefined,
    prenom?: string | undefined,
    naissance?: Date | undefined,
    maison?: Maison | undefined,
    password?: any | undefined,
    solde?: number | undefined,
    type?: string | undefined
    //  private _cours?:Cours|undefined
  ) {
    super(id, login, nom, prenom, naissance, maison, password, solde, type);
  }

  //  public get cours():Cours |undefined {
  //    return this._cours;
  //  }
  //  public set cours(value :Cours |undefined) {
  //   this._cours= value
  // }
}
