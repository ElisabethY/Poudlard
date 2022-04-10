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
import { CompteEditComponent } from './component/comptes/compte-edit/compte-edit.component';
import { CompteListComponent } from './component/comptes/compte-list/compte-list.component';
import { MaisonComponent } from './component/maison/maison.component';
import { CoursEditComponent } from './component/cours/cours-edit/cours-edit.component';
import { CoursListComponent } from './component/cours/cours-list/cours-list.component';
import { EvenementComponent } from './component/evenement/evenement.component';
import { AgendaComponent } from './component/cours/agenda/agenda.component';
import { MenuAdminComponent } from './component/menu-admin/menu-admin.component';
import { Routes } from "@angular/router";
 // import { FromTemplateComponent } from './component/formulaire/from-template/from-template.component';

export
const routes : Routes= [

{path: 'connexion',component: LoginComponent},

{path: 'admin',component: MenuAdminComponent},
{path: 'evenement',component: EvenementComponent},
{path: 'evenement/edit/:id',component: EventEditComponent},
{path: 'evenement/add',component: EventEditComponent},
{path: 'agenda',component: AgendaComponent},
{path: 'cours',component: CoursListComponent},
{path: 'cours/edit',component: CoursEditComponent},
{path: 'maison',component: MaisonComponent },
{path: 'compte',component: CompteListComponent},
{path: 'compte/professeurs',component: ProfComponent},
{path: 'compte/eleves',component: EleveComponent},
{path: 'compte/edit',component: CompteEditComponent},
{path: 'boutique',component: BoutiqueListComponent},
{path: 'boutique/produits/:id',component: ProduitListComponent},
{path: 'panier/compte/:id',component: PanierComponent},
{path: 'boutique/edit',component: BoutiqueEditComponent},
{path: 'produit',component: ProduitListComponent},
{path: 'produit/edit',component: ProduitEditComponent},

//{path: 'formulaire/template',component: FromTemplateComponent},
]
