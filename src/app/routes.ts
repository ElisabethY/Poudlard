import { BulletinEditComponent } from './component/cours/bulletin/bulletin-edit/bulletin-edit.component';
import { BulletinComponent } from './component/cours/bulletin/bulletin.component';
import { ValidationComponent } from './component/boutique/panier/validation/validation.component';
import { ProduitDetailComponent } from './component/boutique/produit-detail/produit-detail.component';
import { ProfilComponent } from './component/comptes/profil/profil.component';
import { MenuComponent } from './component/menu/menu.component';
import { ListeElevesComponent } from './component/cours/liste-eleves/liste-eleves.component';
import { CoursListeComponent } from './component/cours/cours-liste/cours-liste.component';
import { ProfEditComponent } from './component/comptes/compte-list/prof/prof-edit/prof-edit.component';
import { EleveEditComponent } from './component/comptes/compte-list/eleve/eleve-edit/eleve-edit.component';
import { MaisonEditComponent } from './component/maison/maison-edit/maison-edit.component';
import { LoginComponent } from './component/login/login.component';
import { PanierComponent } from './component/boutique/panier/panier.component';
import { ProfComponent } from './component/comptes/compte-list/prof/prof.component';
import { EleveComponent } from './component/comptes/compte-list/eleve/eleve.component';
import { EventEditComponent } from './component/evenement/event-edit/event-edit.component';
 // import { GuardService } from './service/guard.service';
import { ProduitEditComponent } from './component/boutique/produit-edit/produit-edit.component';
import { ProduitListComponent } from './component/boutique/produit-list/produit-list.component';
import { BoutiqueEditComponent } from './component/boutique/boutique-edit/boutique-edit.component';
import { BoutiqueListComponent } from './component/boutique/boutique-list/boutique-list.component';
import { CompteListComponent } from './component/comptes/compte-list/compte-list.component';
import { MaisonComponent } from './component/maison/maison.component';
import { CoursEditComponent } from './component/cours/cours-edit/cours-edit.component';
import { EvenementComponent } from './component/evenement/evenement.component';

import { Routes } from "@angular/router";
import { ProduitAddComponent } from './component/boutique/produit-add/produit-add/produit-add.component';
 // import { FromTemplateComponent } from './component/formulaire/from-template/from-template.component';

export
const routes : Routes= [

{path: 'connexion',component: LoginComponent},
{path: 'profil',component: ProfilComponent},

{path: 'menu',component: MenuComponent},
{path: 'evenement',component: EvenementComponent},
{path: 'evenement/edit/:id',component: EventEditComponent},
{path: 'evenement/add',component: EventEditComponent},

{path: 'cours',component: CoursListeComponent},
{path: 'cours/edit/:id',component: CoursEditComponent},
{path: 'eleve/cours/:id',component: ListeElevesComponent},

{path: 'eleves/bulletin/:id',component: BulletinComponent},
{path: 'bulletin/edit/:id',component: BulletinEditComponent},
{path: 'bulletin',component: BulletinComponent},

{path: 'maison',component: MaisonComponent },
{path: 'maison/edit/:id',component: MaisonEditComponent },
{path: 'maison/add',component: MaisonEditComponent },

{path: 'compte',component: CompteListComponent},
{path: 'compte/professeurs',component: ProfComponent},
{path: 'compte/professeurs/edit/:id',component: ProfEditComponent},
{path: 'compte/professeurs/add',component: ProfEditComponent},
{path: 'compte/eleves',component: EleveComponent},
{path: 'compte/eleves/edit/:id',component: EleveEditComponent},

{path: 'panier',component: PanierComponent},
{path: 'panier/validation',component: ValidationComponent},

{path: 'boutique',component: BoutiqueListComponent},
{path: 'boutique/produits/:id',component: ProduitListComponent},
{path: 'panier/compte/:id',component: PanierComponent},
{path: 'boutique/edit',component: BoutiqueEditComponent},
{path: 'boutique/edit/:id',component: BoutiqueEditComponent},
{path: 'boutique/produit/detail/:id',component: ProduitDetailComponent},
{path: 'boutique/produit/edit/:id',component: ProduitEditComponent},
{path: 'boutique/produit/add',component: ProduitAddComponent},
//{path: 'formulaire/template',component: FromTemplateComponent},
]

