import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuAdminComponent } from './component/menu-admin/menu-admin.component';
import { EvenementComponent } from './component/evenement/evenement.component';
import { MaisonComponent } from './component/maison/maison.component';
import { AgendaComponent } from './component/cours/agenda/agenda.component';
import { CompteEditComponent } from './component/comptes/compte-edit/compte-edit.component';
import { CompteListComponent } from './component/comptes/compte-list/compte-list.component';
import { BoutiqueListComponent } from './component/boutique/boutique-list/boutique-list.component';
import { BoutiqueEditComponent } from './component/boutique/boutique-edit/boutique-edit.component';
import { ProduitListComponent } from './component/boutique/produit-list/produit-list.component';
import { ProduitEditComponent } from './component/boutique/produit-edit/produit-edit.component';
import { CoursListComponent } from './component/cours/cours-list/cours-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './routes';
import { EventEditComponent } from './component/evenement/event-edit/event-edit.component';
import { ProfComponent } from './component/comptes/compte-list/prof/prof.component';
import { EleveComponent } from './component/comptes/compte-list/eleve/eleve.component';
import { ProfEditComponent } from './component/comptes/compte-list/prof/prof-edit/prof-edit.component';
import { EleveEditComponent } from './component/comptes/compte-list/eleve/eleve-edit/eleve-edit.component';
import { PanierComponent } from './component/boutique/panier/panier.component';

import { LoginComponent } from './component/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FromTemplateComponent } from './component/formulaire/from-template/from-template.component';
// import { FormCodeComponent } from './component/formulaire/form-code/form-code.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuAdminComponent,
    EvenementComponent,
    MaisonComponent,
    AgendaComponent,
    CompteEditComponent,
    CompteListComponent,
    BoutiqueListComponent,
    BoutiqueEditComponent,
    ProduitListComponent,
    ProduitEditComponent,
    CoursListComponent,
    EventEditComponent,
    EleveComponent,
    ProfComponent,
    ProfEditComponent,
    EleveEditComponent,
    PanierComponent,
    LoginComponent,
    // FromTemplateComponent,
    // FormCodeComponent,



  ],
  imports: [
    HttpClientModule, BrowserModule, RouterModule.forRoot(routes),FormsModule, ReactiveFormsModule, RouterModule,
  ],
  // permet que ds tous le module on puisse user l'interceptor pour toute les requetes
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
title = 'Poudlard';

public constructor(private authService: AuthService){}

get login(){
  return localStorage.getItem('login');
}

isAuthenticated(){
  return this.authService.isAuthenticated;
}

logout() {
  localStorage.clear();
}


}
