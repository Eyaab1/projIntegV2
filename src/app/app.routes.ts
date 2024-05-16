import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FypComponent } from './components/user-interface/fyp/fyp.component';
import { profile } from 'console';
import { ProfileComponent } from './components/user-interface/profile/profile.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { EspaceClasseComponent } from './components/user-interface/espace-classe/espace-classe.component';
import { HomeComponent } from './components/home/home.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { SettingComponent } from './components/user-interface/setting/setting.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'userInter',component:UserInterfaceComponent,
        children:[
            {path:'',component:FypComponent},
            {path:'fyp',component:FypComponent},
            {path:'espaceClasse',component:EspaceClasseComponent},
            {path:'profile',component:ProfileComponent},
            {path:'setting',component:SettingComponent},

        ]
    },
    {path:"calendar", component:CalendrierComponent},
    {path:"**", component:ErrorsComponent},
    
];
