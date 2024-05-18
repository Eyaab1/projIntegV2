import { Routes } from '@angular/router';
import { FypComponent } from './components/user-interface/fyp/fyp.component';
import { ProfileComponent } from './components/user-interface/profile/profile.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';
import { EspaceClasseComponent } from './components/user-interface/espace-classe/espace-classe.component';
import { HomeComponent } from './components/home/home.component';
import { CalendrierComponent } from './components/calendrier/calendrier.component';
import { SettingComponent } from './components/user-interface/setting/setting.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'homepage', title:'homepage', component:HomeComponent},
    {path:'login', title:'homepage', component:LoginComponent},

    {path:'userInter',title:'user interface',component:UserInterfaceComponent,
    
        children:[
            { path: '', redirectTo: 'fyp', pathMatch: 'full' },
            {path:'fyp',title:'for you',component:FypComponent},
            {path:'espaceClasse',component:EspaceClasseComponent},
            {path:'profile',component:ProfileComponent},
            {path:'setting',component:SettingComponent},

        ]
    },
    {path:"calendar", component:CalendrierComponent},
    {path:"", redirectTo:"homepage",pathMatch:"full"},
    {path:"**", component:ErrorsComponent},
    
];
