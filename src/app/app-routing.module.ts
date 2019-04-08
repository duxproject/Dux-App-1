import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
  { path: 'add-rates', loadChildren: './pages/guide/add-rates/add-rates.module#AddRatesPageModule' },
  { path: 'view-guide-profile', loadChildren: './pages/tourist/view-guide-profile/view-guide-profile.module#ViewGuideProfilePageModule' },
  { path: 'view-packages', loadChildren: './pages/tourist/view-packages/view-packages.module#ViewPackagesPageModule' },
  { path: 'map', loadChildren: './pages/tourist/map/map.module#MapPageModule' },
  { path: 'package-list', loadChildren: './pages/tourist/package-list/package-list.module#PackageListPageModule' },
  { path: 'rate-list', loadChildren: './pages/tourist/rate-list/rate-list.module#RateListPageModule' },
  { path: 'travel-plan', loadChildren: './pages/tourist/travel-plan/travel-plan.module#TravelPlanPageModule' },
  { path: 'view-places', loadChildren: './pages/tourist/view-places/view-places.module#ViewPlacesPageModule' },
  { path: 'view-rates', loadChildren: './pages/tourist/view-rates/view-rates.module#ViewRatesPageModule' },
  { path: 'add-packages', loadChildren: './pages/guide/add-packages/add-packages.module#AddPackagesPageModule' },
  { path: 'manage-packages', loadChildren: './pages/guide/manage-packages/manage-packages.module#ManagePackagesPageModule' },
  { path: 'tour-requests', loadChildren: './pages/guide/tour-requests/tour-requests.module#TourRequestsPageModule' },
  { path: 'view-rating', loadChildren: './pages/guide/view-rating/view-rating.module#ViewRatingPageModule' },
  { path: 'dashboard', loadChildren: './pages/admin/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'admin-requests', loadChildren: './pages/admin/admin-requests/admin-requests.module#AdminRequestsPageModule' },
  { path: 'guide-requests', loadChildren: './pages/admin/guide-requests/guide-requests.module#GuideRequestsPageModule' },
  { path: 'guides', loadChildren: './pages/admin/guides/guides.module#GuidesPageModule' },
  { path: 'userprofile', loadChildren: './pages/admin/userprofile/userprofile.module#UserprofilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
