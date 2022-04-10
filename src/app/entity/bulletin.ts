import { Cours } from './cours';
export class Bulletin {
  public constructor(
    private _id?: number | undefined,
    private _cours?: Cours | undefined,
    private _note?: number | undefined,
    private _commentaire?: string | undefined
  ) {}

  public get id(): number | undefined {
    return this._id;
  }

  public set id(value: number | undefined) {
    this._id = value;
  }

  public get cours(): Cours | undefined {
    return this._cours;
  }

  public set intitule(value: Cours | undefined) {
    this._cours = value;
  }

  public get note(): number | undefined {
    return this._note;
  }

  public set note(value: number | undefined) {
    this._note = value;
  }

  public get commentaire(): string | undefined {
    return this._commentaire;
  }

  public set commentaire(value: string | undefined) {
    this._commentaire = value;
  }
}
