const URL = 'https://api.figma.com/v1';
const PROJECT_ID = '66971407';
const TOKEN = '332060-bf13f74e-8dcc-48a2-87c1-dcf9581941ab';

export const getFigmaFiles = async () => {
  return await fetch(`${URL}/projects/${PROJECT_ID}/files`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Figma-Token': TOKEN,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getFigmaFileById = async (id, fileId) => {
  return await fetch(`${URL}/images/${fileId}?ids=${id}&format=svg`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Figma-Token': TOKEN,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getSlide = async (id, fileId) => {
  const slideImage = await getFigmaFileById(id, fileId);
  return slideImage;
};

const getFiles = async (res, fileId) => {
  const filePages = await Promise.all(
    res.document.children.map(async (c) => {
      const withoutConfig = c.children.filter(
        (cc) => !cc.name.includes('config')
      );

      return {
        projectName: c.name,
        projectId: c.id,
        config: c.children.find((cc) => cc.name === 'config')?.children?.[0]
          ?.characters,
        slides: await Promise.all(
          withoutConfig.map(async (cc) => {
            const slideInfo = cc.children.find((slideItem) =>
              slideItem.name.includes('info')
            );
            const slideImageData = cc.children.find(
              (slideItem) => !slideItem.name.includes('info')
            );
            return {
              slideId: cc.id,
              slideCaption: slideInfo ? slideInfo.children[0].characters : '',
              slideImageData: slideImageData,
              slideImageDataId: slideImageData.id,
              slideImage: await getSlide(slideImageData.id, fileId),
            };
          })
        ),
      };
    })
  );
  return filePages;
};

export const getFigmaFilePages = async (fileId) => {
  //to flatten use ?depth=1
  return await fetch(`${URL}/files/${fileId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Figma-Token': TOKEN,
    },
  })
    .then(async (res) => {
      const response = await res.json();
      const dataFile = await getFiles(response, fileId);
      return dataFile;
    })
    .catch((err) => console.log(err));
};

export const getFigmaEmbedUrl = ({ file_key, id }) =>
  `https://www.figma.com/embed?embed_host=uik.appd-ui.com&url=https://www.figma.com/file/${file_key}/?node-id=${encodeURIComponent(
    id
  )}`;
