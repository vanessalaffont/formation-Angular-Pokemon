import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
  
// routes , l'ordre des routes est très importantes!
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemon/list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }  // ** permets de capturer ttes les rouites qui n'ont pas été intercépté précédemment// 
];
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }