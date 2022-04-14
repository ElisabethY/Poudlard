import { MenuComponent } from './component/menu/menu.component';
import { MaisonEditComponent } from './component/maison/maison-edit/maison-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AuthService } from './service/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvenementComponent } from './component/evenement/evenement.component';
import { MaisonComponent } from './component/maison/maison.component';
import { CompteListComponent } from './component/comptes/compte-list/compte-list.component';
import { BoutiqueListComponent } from './component/boutique/boutique-list/boutique-list.component';
import { BoutiqueEditComponent } from './component/boutique/boutique-edit/boutique-edit.component';
import { ProduitListComponent } from './component/boutique/produit-list/produit-list.component';
import { ProduitEditComponent } from './component/boutique/produit-edit/produit-edit.component';
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
import { CoursListeComponent } from './component/cours/cours-liste/cours-liste.component';
import { CoursEditComponent } from './component/cours/cours-edit/cours-edit.component';
import { ListeElevesComponent } from './component/cours/liste-eleves/liste-eleves.component';
import { BulletinComponent } from './component/cours/bulletin/bulletin.component';
import { ProfilComponent } from './component/comptes/profil/profil.component';
import { ValidationComponent } from './component/boutique/panier/validation/validation.component';
import { BulletinEditComponent } from './component/cours/bulletin/bulletin-edit/bulletin-edit.component';
// import { FromTemplateComponent } from './component/formulaire/from-template/from-template.component';
// import { FormCodeComponent } from './component/formulaire/form-code/form-code.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EvenementComponent,
    MaisonComponent,
    CompteListComponent,
    BoutiqueListComponent,
    BoutiqueEditComponent,
    ProduitListComponent,
    ProduitEditComponent,
    EventEditComponent,
    EleveComponent,
    ProfComponent,
    ProfEditComponent,
    EleveEditComponent,
    PanierComponent,
    LoginComponent,
    MaisonEditComponent,
    CoursListeComponent,
    CoursEditComponent,
    ListeElevesComponent,
    BulletinComponent,
    ProfilComponent,
    ValidationComponent,
    BulletinEditComponent,
    // FromTemplateComponent,
    // FormCodeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  // permet que ds tous le module on puisse user l'interceptor pour toute les requetes
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  title = 'Poudlard';

}
