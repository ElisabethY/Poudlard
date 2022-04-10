// import { ValidationErrors } from '@angular/forms';
// import { AbstractControl } from '@angular/forms';
// import { CustomValidator } from './../../../validator/custom-validator';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form-code',
//   templateUrl: './form-code.component.html',
//   styleUrls: ['./form-code.component.css']
// })
// export class FormCodeComponent implements OnInit {
// // lui est necessaire dans tous les cas. pour les form controlé par le code, on est obligé de l'avoir
//   form:FormGroup

// //il faut cr&ééer un form group dans le constructeur
//   constructor() {this.form=new FormGroup({
//     //on ajoute ici les controles qu'on veut pour l'input qui a le nom inputctrl
//     prenomCtrl:new FormControl('',
//     [ Validators.required,
//     CustomValidator.inputCheck,
//     ]),
//     nomCtrl: new FormControl('',[
//       Validators.required,
//       Validators.minLength(2),
//       CustomValidator.blockSaisieTexteDansInput('username')
//     ]),
//     //pour verifier le login et password
//     //on fait des controles sur un groupe entier donc on peut retrouver tous les elements
//     // d'un groupe
//     loginPasswordGroup:new FormGroup({
//       loginCtrl: new FormControl('', Validators.required),
//       passwordCtrl: new FormControl('',Validators.required),
//     },
//     // c'est le equals qui est en false de base et qui devient true en bas si jamais
//     // on a login= passwors. on le met ici pour que il englobe et login et mdp
//       this.notEquals
//     ), // ici la virdule entre les 2 est necessaire
//   });
// }
// // on fait la fonction de validation dans la classe
// //
// notEquals(control: AbstractControl):ValidationErrors | null {
//   let group=control as FormGroup;
//   let login = group.controls['loginCtrl']
//   let password = group.controls['passwordCtrl'];
//    //  if (login.pristine || password.pristine) return null;

//    // on prend nos valeurs et on veut pas qu'ils soient egaux.
// //si c'est vrai on envoie equals true sinon on envoie null.
// //equals c'est le nom de l'erreur.

// return login.value==password.value?{equals:true}:null;

// }

//   ngOnInit(): void {

//   }
//   submit(){
//     //recup la valeur de l'input. ici il y a pas de ngModel, pas de binding 2 way
//     console.log(this.form.controls['prenomCtrl'].value);
//   //  console.log(this.form.get['prenomCtrl']?.value);
//   }
// }
