import { highchartColors, highchartColorPalette } from './config';

export const componentShowcaseSelectItems = [
  {
    id: 1,
    name: 'APM',
  },
  {
    id: 2,
    name: 'Infra',
  },
  {
    id: 3,
    name: 'Kubernetes',
  },
];

export const durationOptions = [
  {
    id: 0,
    name: 'now -1d',
  },
  {
    id: 1,
    name: 'now -1w',
  },
  {
    id: 2,
    name: 'now -30d',
  },
  {
    id: 3,
    name: 'Custom Date Range',
  },
];

export const entities = [
  { id: 1, name: 'apm:backend' },
  { id: 2, name: 'apm:business_transaction' },
  { id: 3, name: 'apm:database_backend' },
  { id: 4, name: 'apm:http_backend' },
  { id: 5, name: 'apm:instance_endpoint' },
  { id: 6, name: 'apm:messaging_backend' },
  { id: 7, name: 'apm:request' },
  { id: 8, name: 'apm:service' },
  { id: 9, name: 'apm:service_endpoint' },
  { id: 10, name: 'apm:service_instance' },
  { id: 11, name: 'apm:unknown_backend' },
  { id: 12, name: 'aws:application_load_balancer' },
  { id: 13, name: 'aws:aurora_cluster' },
  { id: 14, name: 'aws:aurora_instance' },
  { id: 15, name: 'aws:classic_load_balancer' },
  { id: 16, name: 'aws:ebs' },
  { id: 17, name: 'aws:ec2' },
  { id: 18, name: 'aws:load_balancer' },
  { id: 19, name: 'aws:maria_db' },
  { id: 20, name: 'aws:mysql' },
  { id: 21, name: 'aws:network_load_balancer' },
  { id: 22, name: 'aws:oracle' },
  { id: 23, name: 'aws:postgresql' },
  { id: 24, name: 'aws:rds' },
  { id: 25, name: 'aws:sql_server' },
  { id: 26, name: 'aws:vpc' },
  { id: 27, name: 'azure:disk' },
  { id: 28, name: 'azure:vm' },
  { id: 29, name: 'cloud:database' },
  { id: 30, name: 'cloud:database_instance' },
  { id: 31, name: 'cloud:disk' },
  { id: 32, name: 'cloud:host' },
  { id: 33, name: 'cloud:load_balancer' },
  { id: 34, name: 'cloud:network' },
  { id: 35, name: 'common:interaction' },
  { id: 36, name: 'eum:application' },
  { id: 37, name: 'eum:network_request' },
  { id: 38, name: 'infra:container' },
  { id: 39, name: 'infra:disk' },
  { id: 40, name: 'infra:filesystem' },
  { id: 41, name: 'infra:host' },
  { id: 42, name: 'infra:network_interface' },
  { id: 43, name: 'k8s:cluster' },
  { id: 44, name: 'k8s:cronjob' },
  { id: 45, name: 'k8s:daemonset' },
  { id: 46, name: 'k8s:deployment' },
  { id: 47, name: 'k8s:ingress' },
  { id: 48, name: 'k8s:job' },
  { id: 49, name: 'k8s:managed_job' },
  { id: 50, name: 'k8s:managed_replicaset' },
  { id: 51, name: 'k8s:namespace' },
  { id: 52, name: 'k8s:namespaced_object' },
  { id: 53, name: 'k8s:node' },
  { id: 54, name: 'k8s:object' },
  { id: 55, name: 'k8s:pod' },
  { id: 56, name: 'k8s:pv' },
  { id: 57, name: 'k8s:pvc' },
  { id: 58, name: 'k8s:replicaset' },
  { id: 59, name: 'k8s:resource_quota' },
  { id: 60, name: 'k8s:service' },
  { id: 61, name: 'k8s:statefulset' },
  { id: 62, name: 'k8s:unmanaged_job' },
  { id: 63, name: 'k8s:unmanaged_replicaset' },
  { id: 64, name: 'k8s:workload' },
  { id: 65, name: 'sum:page' },
  { id: 66, name: 'sum:resource' },
  { id: 67, name: 'sum:schedule' },
];

export const suggestedQueries = [
  {
    id: 0,
    title: 'Traces with latency > 50ms',
    selectedItems: [
      'id',
      'type',
      'alerting:healthrule.violation',
      'troubleshooting:cogeng_ad_event',
    ],
    generatedQuery:
      'FETCH id, type, events(alerting:healthrule.violation), events(troubleshooting:cogeng_ad_event) FROM entities(apm:backend)  SINCE now -1d',
  },
  {
    id: 1,
    title: 'Metrics violated for upstream calls to service A',
    selectedItems: [
      'type',
      'logs:generic_record',
      'troubleshooting:cogeng_ad_event',
    ],
    generatedQuery:
      'FETCH type, events(logs:generic_record), events(troubleshooting:cogeng_ad_event) FROM entities(apm:backend)  SINCE now -1d',
  },
  {
    id: 2,
    title: 'Logs with “severe” status in the past 1 day',
    selectedItems: ['id', 'created at', 'is active', 'tags', 'apm:errors_min'],
    generatedQuery:
      'FETCH id, createdAt, isActive, tags, metrics(apm:errors_min, "sys:derived") FROM entities(apm:business_transaction)  SINCE now -1d',
  },
  {
    id: 3,
    title: 'Logs with “warning” status in the past 1 day',
    selectedItems: [
      'id',
      'created at',
      'is active',
      'tags',
      'apm:errors_min',
      'type',
      'troubleshooting:cogeng_ad_event',
    ],
    generatedQuery:
      'FETCH id, type, events(troubleshooting:cogeng_ad_event), createdAt, isActive, tags, metrics(apm:errors_min, "sys:derived") FROM entities(apm:backend)  SINCE now -1d',
  },
  {
    id: 4,
    title: 'Events with “severe” status in past 1 day',
    selectedItems: [
      'id',
      'created at',
      'is active',
      'tags',
      'apm:errors_min',
      'type',
      'troubleshooting:cogeng_ad_event',
      'alerting:health.status',
      'namespace',
    ],
    generatedQuery:
      'FETCH id, type, events(troubleshooting:cogeng_ad_event), createdAt, isActive, tags, metrics(apm:errors_min, "sys:derived"), metrics(alerting:health.status, "alerting"), attributes("service.namespace"), FROM entities(apm:service)  SINCE now -1d',
  },
  {
    id: 5,
    title: 'Events with “warning” status in past 1 day',
    selectedItems: [
      'type',
      'logs:generic_record',
      'troubleshooting:cogeng_ad_event',
      'id',
    ],
    generatedQuery:
      'FETCH id, type, events(logs:generic_record), events(troubleshooting:cogeng_ad_event) FROM entities(aws:oracle)  SINCE now -1d',
  },
];

export const options = [
  {
    func: 'id',
    display: 'id',
    query: 'id',
  },
  {
    func: 'type',
    display: 'type',
    query: `type`,
  },
  {
    func: 'events',
    display: 'logs:generic_record',
    query: `events(logs:generic_record)`,
    max: 1,
  },
  {
    func: 'events',
    display: 'alerting:healthrule.violation',
    query: `events(alerting:healthrule.violation)`,
    max: 1,
  },
  {
    func: 'events',
    display: 'troubleshooting:cogeng_ad_event',
    query: `events(troubleshooting:cogeng_ad_event)`,
    max: 1,
  },
  {
    func: 'createdAt',
    display: 'created at',
    query: `createdAt`,
  },
  {
    func: 'isActive',
    display: 'is active',
    query: `isActive`,
  },
  {
    func: 'updatedAt',
    display: 'updated at',
    query: 'updatedAt',
  },
  {
    func: 'tags',
    display: 'tags',
    query: 'tags',
  },
  {
    func: 'metrics',
    display: 'apm:calls_min',
    query: 'metrics(apm:calls_min, "sys:derived")',
  },
  {
    func: 'metrics',
    display: 'apm:errors_min',
    query: 'metrics(apm:errors_min, "sys:derived")',
  },
  {
    func: 'metrics',
    display: 'alerting:health.status',
    query: 'metrics(alerting:health.status, "alerting")',
  },
  {
    func: 'metrics',
    display: 'apm:response_time',
    query: 'metrics(apm:response_time, "sys:derived")',
  },
  {
    func: 'metrics',
    display: 'logs:log_records',
    query: 'metrics(logs:log_records, "sys:derived")',
  },
  {
    func: 'metrics',
    display: 'troubleshooting:anomaly_health',
    query: 'metrics(troubleshooting:anomaly_health, "cogeng")',
  },
  {
    func: 'attribute',
    attribute: 'service.name',
    display: 'name',
    query: `attributes("service.name")`,
  },
  {
    func: 'attribute',
    attribute: 'service.namespace',
    display: 'namespace',
    query: `attributes("service.namespace"),`,
  },
  {
    func: 'attribute',
    attribute: 'service.health',
    display: 'health',
    query: `attributes("service.health")`,
  },
  {
    func: 'attribute',
    attribute: 'environment',
    display: 'environment',
    query: `attributes("service.environment"),`,
  },
  {
    func: 'attribute',
    attribute: 'status',
    display: 'status',
    query: `attributes("status")`,
  },
];

export const includeOptions = [
  {
    id: 0,
    func: 'id',
    display: 'id',
    query: 'id',
  },
  {
    id: 1,
    func: 'type',
    display: 'type',
    query: `type`,
  },
  {
    id: 2,
    func: 'createdAt',
    display: 'created at',
    query: `createdAt`,
  },
  {
    id: 3,
    func: 'isActive',
    display: 'is active',
    query: `isActive`,
  },
  {
    id: 4,
    func: 'updatedAt',
    display: 'updated at',
    query: 'updatedAt',
  },
  {
    id: 5,
    func: 'tags',
    display: 'tags',
    query: 'tags',
  },
];

export const storiesDisplaySelect = [
  /* {
    id: 0,
    name: 'Horizontal Scroll',
  }, */
  {
    id: 0,
    name: 'Slideshow',
  },
  {
    id: 1,
    name: 'Vertical Scroll',
  },
];

export const chartData = {
  series: [
    {
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
    },
    {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
    },
    {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
    },
    {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
    },
    {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
    },
  ],
};

export const actions = [
  {
    id: 1,
    icon: '/appAssets/edit.svg',
    name: 'edit',
    toggled: true,
  },
  {
    id: 2,
    icon: '/appAssets/more-vertical.svg',
    name: 'more',
  },
];

export const editData = [
  {
    id: 1,
    title: 'Sectors',
    data: [
      {
        id: 1,
        label: 'Sector',
        value: 'Installation',
        placeholder: 'Enter value...',
        type: 'text',
      },
      {
        id: 2,
        label: 'Description',
        value: 'First sector of many sectors that we have business in.',
        placeholder: 'Enter value...',
        type: 'text',
      },
    ],
  },
  {
    id: 2,
    title: 'Sectors',
    data: [
      {
        id: 1,
        label: 'Sector',
        value: 'Manufacturing',
        placeholder: 'Enter value...',
        type: 'text',
      },
      {
        id: 2,
        label: 'Description',
        value: 'Second sector of many sectors that we have business in.',
        placeholder: 'Enter value...',
        type: 'text',
      },
    ],
  },
  {
    id: 3,
    title: 'Sectors',
    data: [
      {
        id: 1,
        label: 'Sector',
        value: 'Sales & Distribution',
        placeholder: 'Enter value...',
        type: 'text',
      },
      {
        id: 2,
        label: 'Description',
        value: 'Third sector of many sectors that we have business in.',
        placeholder: 'Enter value...',
        type: 'text',
      },
    ],
  },
  {
    id: 4,
    title: 'Sectors',
    data: [
      {
        id: 1,
        label: 'Sector',
        value: 'Project Development',
        placeholder: 'Enter value...',
        type: 'text',
      },
      {
        id: 2,
        label: 'Description',
        value: 'Fourth sector of many sectors that we have business in.',
        placeholder: 'Enter value...',
        type: 'text',
      },
    ],
  },
  {
    id: 5,
    title: 'Sectors',
    data: [
      {
        id: 1,
        label: 'Sector',
        value: 'Other',
        placeholder: 'Enter value...',
        type: 'text',
      },
      {
        id: 2,
        label: 'Description',
        value: 'Fifth sector of many sectors that we have business in.',
        placeholder: 'Enter value...',
        type: 'text',
      },
    ],
  },
];

export const chartOptions = {
  colors: highchartColorPalette,
  title: null,
  yAxis: {
    title: null,
    gridLineColor: 'transparent',
    labels: {
      formatter: function () {
        if (this.isFirst) {
          return '';
        }
        return this.value;
      },
    },
  },
  xAxis: {
    title: null,
    gridLineColor: 'transparent',
    tickLength: 0,
    lineWidth: 0,
    labels: {
      formatter: function () {
        if (this.isFirst) {
          return '';
        }
        return this.value;
      },
    },
  },
  legend: {
    layout: 'horizontal',
    align: 'center',
    verticalAlign: 'bottom',
    x: 0,
    y: 0,
    itemStyle: {
      color: '#fff',
    },
  },
  chart: {
    marginBottom: 100,
    backgroundColor: null,
    borderWidth: 0,
    //type: "area",
    //margin: [2, 0, 2, 0],
    //width: window.width * 0.5,
    //height: 30,
    style: {
      overflow: 'visible',
    },
    skipClone: true,
  },
  plotOptions: {
    series: {
      animation: false,
      lineWidth: 2,
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
  series: [
    {
      data: [1, 2, 3, 5, 7, 8, 4, 5, 6, 3, 2, 1, 7],
    },
  ],
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      },
    ],
  },
};

export const cardDataExample = [{}];
