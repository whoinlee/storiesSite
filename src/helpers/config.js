export const highchartColors = {
  primary: '#724CD6',
};

export const highchartColorPalette = [
  '#8B55E7',
  '#66A1FF',
  '#F8B74B',
  '#D45E85',
  '#A6EBF2',
  '#3FD2AA',
];

export const navRightItems = [
  {
    id: 1,
    name: 'Search',
    icon: '/appAssets/search.svg',
  },
  {
    id: 2,
    name: 'Refresh',
    icon: '/appAssets/refresh.svg',
  },
  {
    id: 3,
    name: 'Timespan',
    icon: '/appAssets/clock.svg',
    options: [
      {
        id: 0,
        name: 'Last 30 Mins',
      },
      {
        id: 1,
        name: 'Last 60 Mins',
      },
      {
        id: 2,
        name: 'Last 24 hours',
      },
    ],
    selectedOptionId: 1,
  },
  {
    id: 4,
    name: 'Help',
    icon: '/appAssets/help.svg',
  },
  {
    id: 5,
    name: 'Profile',
    icon: '/appAssets/user.svg',
    link: '',
  },
];

export const navLeftItems = [
  {
    id: 1,
    name: 'Back',
    icon: 'arrow-left',
    link: '',
  },
  {
    id: 2,
    name: 'Forward',
    icon: 'arrow-right',
    link: '',
  },
];

export const navBreadcrumbs = [
  {
    name: 'Observe',
    link: '/observe',
  },
  {
    name: 'Servicing',
    link: '/observe/servicing',
  },
];

export const menuItems = [
  {
    id: 1,
    name: 'Dashboard',
    icon: '/appAssets/dashboards.svg',
    link: '/',
  },
  {
    id: 2,
    name: 'Observe',
    icon: '/appAssets/view-details.svg',
    link: '/observe',
  },
  {
    id: 3,
    name: 'Alerts',
    icon: '/appAssets/warning-nav.svg',
    link: '/alerts',
  },
  {
    id: 4,
    name: 'Configure',
    icon: '/appAssets/configure.svg',
    secondaryIcon: 'chevron-right',
    children: [
      {
        category: 'Health rules & alerts',
        children: [
          {
            name: 'Actions',
          },
          {
            name: 'Health Rules',
          },
          {
            name: 'Anomaly Detection',
          },
        ],
      },
      {
        category: 'Data Sources',
        children: [
          {
            name: 'Cloud Platforms',
          },
          {
            name: 'Open Telemetry',
          },
          {
            name: 'Configure',
          },
        ],
      },
      {
        category: 'Settings',
        children: [
          {
            name: 'Switch Theme',
          },
        ],
      },
      {
        category: 'Sample Pages',
        children: [
          {
            name: 'Designs',
            link: '/designs',
            toggleSidebar: 'true',
          },
          {
            name: 'Multi Entity',
            link: '/multi-entity',
            toggleSidebar: 'true',
          },
          {
            name: 'Edit Card',
            link: '/edit-card',
          },
          {
            name: 'Component Showcase',
            link: '/component-showcase',
          },
          {
            name: 'Sample d3 Scatterplot',
            link: '/scatter',
          },
          {
            name: 'Visual Query Builder',
            link: '/query-builder',
          },
          {
            name: 'Query Builder V1',
            link: '/builder',
          },
        ],
      },
    ],
  },
];

export const multiEntityFilters = [
  {
    category: 'Status',
    data: [
      {
        id: 1,
        name: 'Critical',
      },
      {
        id: 2,
        name: 'Warning',
      },
      {
        id: 3,
        name: 'Healthy',
      },
    ],
  },
  {
    category: 'Tags',
    data: [
      {
        id: 4,
        name: 'A',
      },
      {
        id: 5,
        name: 'B',
      },
      {
        id: 6,
        name: 'C',
      },
    ],
  },
  {
    category: 'Relationship',
    data: [
      {
        id: 7,
        name: '1',
      },
      {
        id: 8,
        name: '2',
      },
      {
        id: 9,
        name: '3',
      },
    ],
  },
];

const multiEntityFiltersOld = [
  {
    id: 1,
    name: 'Critical',
    category: 'Status',
  },
  {
    id: 2,
    name: 'Warning',
    category: 'Status',
  },
  {
    id: 3,
    name: 'Healthy',
    category: 'Status',
  },
  {
    id: 4,
    name: 'A',
    category: 'Tags',
  },
  {
    id: 5,
    name: 'B',
    category: 'Tags',
  },
  {
    id: 6,
    name: 'C',
    category: 'Tags',
  },
  {
    id: 7,
    name: '1',
    category: 'Relationship',
  },
  {
    id: 8,
    name: '2',
    category: 'Relationship',
  },
  {
    id: 9,
    name: '3',
    category: 'Relationship',
  },
];

export const sparklineOptions = {
  title: null,
  series: [
    {
      data: [1, 2, 3, 5, 7, 8, 4, 5, 6, 3, 2, 1, 7],
    },
  ],
  chart: {
    backgroundColor: null,
    borderWidth: 0,
    type: 'area',
    margin: [2, 0, 2, 0],
    width: window.width * 0.5,
    height: 30,
    style: {
      overflow: 'visible',
    },
    skipClone: true,
  },
  xAxis: {
    visible: false,
    labels: {
      enabled: false,
    },
    title: {
      text: null,
    },
    startOnTick: false,
    endOnTick: false,
    tickPositions: [],
  },
  yAxis: {
    visible: false,
    endOnTick: false,
    startOnTick: false,
    labels: {
      enabled: false,
    },
    title: {
      text: null,
    },
    tickPositions: [0],
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    hideDelay: 0,
    outside: true,
    shared: true,
    useHTML: true,
    backgroundColor: null,
    borderWidth: 0,
  },
  plotOptions: {
    series: {
      animation: false,
      lineWidth: 2,
      lineColor: highchartColors.primary,
      color:
        highchartColors.primary /* need to find css class to hit this is the shade under the line */,
      shadow: false,
      states: {
        hover: {
          lineWidth: 2,
        },
      },
      marker: {
        enabled: false,
        radius: 1,
        states: {
          hover: {
            radius: 2,
          },
        },
      },
      fillOpacity: 0.25,
    },
    column: {
      negativeColor: '#910000',
      borderColor: 'silver',
    },
  },
};
export const formatEmail = (config) => {
  const metaData = config.split(';');
  const formattedEmail = metaData.map((m) => {
    if (m.includes('@')) {
      const labelEmailArray = m.split(':');
      const email = labelEmailArray[1];
      const label = labelEmailArray[0];
      if (email) {
        return (
          <>
            {label}:
            <a href={`mailto:${email}`} rel='noreferrer' target='_blank'>
              {email}
            </a>
          </>
        );
      } else {
        return m;
      }
    }
    return m;
  });
  /*  const steelthread = formattedEmail.find((f) => f?.includes('steelthread'));
  const meta = formattedEmail.filter((f) => !f?.includes('steelthread'));
  console.log('formattedEmail', formattedEmail); */

  /* const returnObj = {
    steelthread,
    meta,
  };
  console.log('returnObj', returnObj);
  return returnObj; */
  return formattedEmail;
};
