import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent:  () => import('./home/home.component').then(m => m.HomeComponent)
    },

    {
        path: 'components/abc-buttons',
        loadComponent:  () => import('./demo-abc/demo-abc.component').then(m => m.DemoAbcComponent)
    },

    {
        path: 'components/counter-button',
        loadComponent:  () => import('./demo-counter-but/demo-counter-but.component').then(m => m.DemoCounterButComponent)
    },
   
    {
        path: 'components/buttonset-move',
        loadComponent:  () => import('./demo-set-move/demo-set-move.component').then(m => m.DemoSetMoveComponent)
    },

    {
        path: 'components/buttonset-sort',
        loadComponent:  () => import('./demo-set-sort/demo-set-sort.component').then(m => m.DemoSetSortComponent)
    },

    {
        path: 'components/sort-menu',
        loadComponent:  () => import('./demo-sort-menu/demo-sort-menu.component').then(m => m.DemoSortMenuComponent)
    },

    {
        path: 'components/mini-header',
        loadComponent:  () => import('./demo-mini-header/demo-mini-header.component').then(m => m.DemoMiniHeaderComponent)
    },

    {
        path: 'components/mini-search',
        loadComponent:  () => import('./demo-mini-search/demo-mini-search.component').then(m => m.DemoMiniSearchComponent)
    },

    {
        path: 'components/picklist',
        loadComponent:  () => import('./demo-picklist/demo-picklist.component').then(m => m.DemoPicklistComponent)
    },

    {
        path: 'components/form-error',
        loadComponent:  () => import('./demo-form-er/demo-form-er.component').then(m => m.DemoFormErComponent)
    },

    {
        path: 'components/phone-inputs',
        loadComponent:  () => import('./demo-phone-inputs/demo-phone-inputs.component').then(m => m.DemoPhoneInputsComponent)
    },
];
