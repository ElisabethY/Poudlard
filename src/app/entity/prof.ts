import { Maison } from './maison';
export class Prof {
  public constructor(
    private _id?: number|undefined ,
    private _login?: string|undefined ,
    private _nom?: string| undefined,
    private _prenom?: string| undefined,
    private _naissance?: Date| undefined,
    private _maison?: Maison| undefined,
    private _password?: any | undefined

  ) {}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get login(): string | undefined{
    return this._login;
  }

  public set login(value: string| undefined) {
    this._login = value;
  }

  public get nom(): string | undefined{
    return this._nom;
  }

  public set nom(value: string| undefined) {
    this._nom = value;
  }

  public get prenom(): string | undefined{
    return this._prenom;
  }

  public set prenom(value: string| undefined) {
    this._prenom = value;
  }

  public get naissance(): Date | undefined{
    return this._naissance;
  }

  public set naissance(value: Date| undefined) {
    this._naissance = value;
  }

  public get maison(): Maison| undefined {
    return this._maison;
  }

  public set maison(value: Maison| undefined) {
    this._maison = value;
  }

  public get password(): any| undefined {
    return this._password;
  }

  public set password(value: any| undefined) {
    this._password = value;
  }
}
