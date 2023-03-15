import { ISideNavItem } from "../../interfaces/ui/isidenavitem";

export const LEFT_NAV_ITEMS: {
  estudianate: ISideNavItem[],
  empresa: ISideNavItem[],
  administrador: ISideNavItem[]
} = {
  estudianate: [{
    title: 'Perfil',
    iconClass: 'bi bi-file-person-fill',
    link: '/panel/estudiante'
  },
  {
    title: 'Ofertas Laborales',
    iconClass: 'bi bi-linkedin',
    link: '/ofertas'
  },
  {
    title: 'Ofertas Aplicadas',
    iconClass: 'bi bi-check-circle-fill',
    link: '/ofertas/ofertasAplicadas'
  },
    {
      title: 'Hoja De Vida',
      iconClass: 'bi bi-file-earmark-person-fill',
      link: '/panel/estudiante/hoja-vida'
    }


  ],
  empresa: [{
    title: 'Datos Empresa',
    iconClass: 'bi bi-buildings-fill',
    link: '/panel/empresa'
  },
  {

    title: 'Ofertas Aplicadas',
    iconClass: 'bi bi-person-vcard-fill',
    link: '/panel/empresa/ofertasAplicadas/empresa/id'
  }],
  administrador: [
    {
      title: 'Tablero',
      iconClass: 'bi bi-speedometer',
      link: '/panel/administrador'
    },
    {
      title: 'Hojas de Vida',
      iconClass: 'bi bi-person-vcard-fill',
      link: '/panel/administrador/hojas-vida'

    },
    {
      title: 'Perfiles Empresariales',
      iconClass: 'bi bi-buildings-fill',
      link: '/panel/administrador/perfil-empresarial'
    },
    {
      title: 'Ofertas Laborales',
      iconClass: 'bi bi-linkedin',
      link: '/panel/administrador/ofertas-laborales'
    },
    {
      title: 'Postulaciones',
      iconClass: 'bi bi-person',
      link: '/panel/administrador/postulaciones'
    },
    {
      title: 'Reportes',
      iconClass: 'bi bi-flag',
      link: '/panel/administrador/reportes'
    },

    {
      title: 'Provincia',
      iconClass: 'bi bi-geo-alt',
      link: '/panel/administrador/provincia'
    },
    {
      title: 'Ciudad',
      iconClass: 'bi bi-house-heart-fill',
      link: '/panel/administrador/ciudad'
    },
    {
      title: 'Area Estudio',
      iconClass: 'bi bi-book',
      link: '/panel/administrador/area-estudio'
    },

    {
      title: 'Istitucion Educativa',
      iconClass: 'bi bi-house-door',
      link: '/panel/administrador/istitucion-educativa'
    },
    {
      title: 'Usuarios',
      iconClass: 'bi bi-file-earmark-person',
      link: '/panel/administrador/usuario-list'
    },



  ]
};
