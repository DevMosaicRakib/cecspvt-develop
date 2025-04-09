import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_SERVER_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});
async function LIST(url, args) {
  const response = await axiosInstance.get(url, {
    ...args,
    params: { populate: "*", "sort[0]": "createdAt:desc" },
  });
  console.log({ response });
  const projects = await response?.data?.data;

  return projects.map((project) => {
    return {
      ...project.attributes,
      id: project.id,
      logo: bindServerUrl(project?.attributes?.logo?.data?.attributes?.url),
      image: bindServerUrl(project?.attributes?.image?.data?.attributes?.url),
      gallery: project?.attributes?.gallery?.data?.map((photo) => {
        return bindServerUrl(photo?.attributes?.url);
      }),
      projectPhotos: project?.attributes?.projectPhotos?.data?.map((photo) => {
        return {
          path: bindServerUrl(photo?.attributes?.url),
          text: photo?.attributes?.caption,
        };
      }),
    };
  });
}

async function GET(url, args) {
  const response = await axiosInstance.get(url, {
    ...args,
    params: { populate: "*" },
  });
  console.log({ response });
  const project = await response?.data?.data;

  return {
    ...project.attributes,
    id: project.id,
    logo: bindServerUrl(project?.attributes?.logo?.data?.attributes?.url),
    image: bindServerUrl(project?.attributes?.image?.data?.attributes?.url),
    gallery: project.attributes?.gallery.data?.map((photo) => {
      return bindServerUrl(photo?.attributes?.url);
    }),
    projectPhotos: project?.attributes?.projectPhotos?.data?.map((photo) => {
      return {
        path: bindServerUrl(photo?.attributes?.url),
        text: photo?.attributes?.caption,
      };
    }),
  };
}

function bindServerUrl(url) {
  return `${process.env.NEXT_PUBLIC_STRAPI_SERVER_URL}${url}`;
}
export { LIST, GET };
