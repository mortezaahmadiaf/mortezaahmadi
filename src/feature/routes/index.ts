import HOST from "config/webpack/host.json";
export const urls = {
  home: "/",
  about_us: "about-us",
};

export const basename =
  process.env.NODE_ENV === "development" ? "/" : `/${HOST.host}/`;
