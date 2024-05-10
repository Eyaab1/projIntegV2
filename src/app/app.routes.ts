import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FypComponent } from './components/fyp/fyp.component';
import { profile } from 'console';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { EspaceClasseComponent } from './components/espace-classe/espace-classe.component';
import path from 'path';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'espaceClasse',component:EspaceClasseComponent},
    {path:'login', component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'userInter',component:UserInterfaceComponent,
        children:[
            {path:'',component:FypComponent},
            {path:'fyp',component:FypComponent},
            {path:'espaceClasse',component:EspaceClasseComponent},
            {path:'profile',component:ProfileComponent}
        ]
    },
    {path:"**", component:ErrorsComponent},
    
];
