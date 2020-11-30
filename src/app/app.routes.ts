import { Routes } from '@angular/router';
import { SearchComponent } from '../app/components/search/search.component';
import { SingleUserComponent } from '../app/components/single-user/single-user.component';
import { CreateComponent } from '../app/components/create/create.component';
import { DeleteComponent } from '../app/components/delete/delete.component';

export const ROUTES: Routes = [
    {path: 'search', component: SearchComponent },
    {path: 'single', component: SingleUserComponent },
    {path: 'create', component: CreateComponent },
    {path: 'delete', component: DeleteComponent },
    {path: '', pathMatch: 'full', redirectTo: 'delete' }
];