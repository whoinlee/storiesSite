export const getSearchParams = (urlSearchParams) => {
  if (urlSearchParams) {
    const search = urlSearchParams;
    const paramsObject = JSON.parse(
      '{"' + search.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === '' ? value : decodeURIComponent(value);
      }
    );
    return paramsObject;
  } else {
    return null;
  }
};

export const filterByValue = (array, value) => {
  return array.filter(
    (data) =>
      JSON.stringify(data).toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
};

export const containsEntity = (array, searchLowerCased, categories) => {
  const containsArray = array.map((a) => {
    if (
      a['attributes("service.name")']?.toLowerCase().includes(searchLowerCased)
    ) {
      return a;
    }
    if (
      a['attributes("service.namespace")']
        ?.toLowerCase()
        .includes(searchLowerCased)
    ) {
      return a;
    }
    if (a.type?.toLowerCase().includes(searchLowerCased)) {
      return a;
    } else {
      return null;
    }
  });
  const cleanedArray = containsArray.filter((d) => d !== null);

  const categoriesWithData = categories.map((b) => ({
    ...b,
    data: cleanedArray.filter((f) =>
      f[b.key]?.toLowerCase().includes(searchLowerCased)
    ),
  }));
  if (cleanedArray.length === 0) return [];
  return categoriesWithData;

  //return cleanedArray;
};

export const searchCategories = [
  {
    id: 0,
    type: 'namespace',
    key: 'attributes("service.namespace")',
    data: [],
  },
  {
    id: 1,
    type: 'services',
    key: 'attributes("service.name")',
    data: [],
  },
  {
    id: 2,
    type: 'workload',
    key: '',
    data: [],
  },
];

export const getFilters = (storiesData, setFilters) => {
  let currentIndex = 0;
  const length = storiesData.length;
  const names = [];
  const categories = [];
  const designers = [];
  const pms = [];

  storiesData.forEach((s) => {
    currentIndex++;
    names.push(s.projectName);

    //config
    const meta = s.config.split(';');

    //Steelthread
    categories.push(meta[0]);

    //Designers
    const metaDesigner = meta.find((m) => m.includes('Designer'));
    if (metaDesigner) {
      const designerArray = metaDesigner
        //.replace(/\s/g, '')
        .replace('Designer:', '')
        .split(',');

      designers.push(designerArray);
    }

    //PMs
    const metaPm = meta.find((m) => m.includes('Product Manager'));
    if (metaPm) {
      const pmArray = metaPm.replace('Product Manager:', '').split(',');

      pms.push(pmArray);
    }

    if (currentIndex === length) {
      const filters = [
        {
          category: 'Project',
          data: [...new Set(names)]
            .sort((a, b) => a.localeCompare(b))
            .map((m, index) => ({ id: `project-${index}`, name: m?.trim() })),
        },
        {
          category: 'Business Unit',
          data: [...new Set(categories)]
            .sort((a, b) => a.localeCompare(b))
            .map((m, index) => ({ id: `steelhead-${index}`, name: m?.trim() })),
        },
        {
          category: 'Designers',
          data: [...new Set(designers.flat())]
            .sort((a, b) => a.localeCompare(b))
            .map((m, index) => ({ id: `designers-${index}`, name: m?.trim() })),
        },
        {
          category: 'Product Managers',
          data: [...new Set(pms.flat())]
            .sort((a, b) => a.localeCompare(b))
            .map((m, index) => ({ id: `pms-${index}`, name: m?.trim() })),
        },
      ];

      setFilters(filters);
    }
  });
};
