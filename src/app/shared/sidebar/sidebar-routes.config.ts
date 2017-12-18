import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Inicio', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    // {
    //     path: '/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    {
        path: '', title: 'P. privados', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/parqueadero-publico/registro', title: 'Registro', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: 'javascript:;', title: 'Listado', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
    },
    // {
    //     path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    // },
    // { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'http://parkeapp.com.co/', title: 'Soporte', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
