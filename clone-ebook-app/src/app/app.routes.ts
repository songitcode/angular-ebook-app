import { Routes, RouterModule } from '@angular/router';
import { TruyenTranhComponent } from "./truyen-tranh/truyen-tranh.component";
import { HomeComponent } from "./home/home.component";
import { ChiTietSachComponent } from "./chi-tiet-sach/chi-tiet-sach.component";
import { DocSachComponent } from "./doc-sach/doc-sach.component";
export const routes: Routes = [
    { path: 'truyen-tranh', component: TruyenTranhComponent },

    { path: 'home', component: HomeComponent },
    { path: 'chi-tiet-sach', component: ChiTietSachComponent },
    { path: 'doc-sach', component: DocSachComponent },

    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
    },
];