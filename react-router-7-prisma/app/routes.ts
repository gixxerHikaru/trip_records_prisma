import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("prefectures/:prefectureId", "./routes/prefectureId.tsx"),
] satisfies RouteConfig;
