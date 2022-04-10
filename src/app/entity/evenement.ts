import { Time } from "@angular/common";

export class Evenement {

  public constructor(
    private _id?: number|undefined ,
    private _nomEven?: string| undefined,
    private _date?: Date| undefined,
    private _heure?: Time| undefined,
  ) {}

  public get id(): number| undefined {
    return this._id;
  }

  public set id(value: number| undefined) {
    this._id = value;
  }

  public get nomEven(): string | undefined{
    return this._nomEven;
  }

  public set nomEven(value: string| undefined) {
    this._nomEven = value;
  }
  public get date(): Date| undefined {
    return this._date;
  }

  public set date(value: Date| undefined) {
    this._date = value;
  }
  public get heure(): Time| undefined {
    return this._heure;
  }

  public set heure(value: Time| undefined) {
    this._heure = value ;
  }
}

