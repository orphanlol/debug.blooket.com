import {
  createConnectWebClient,
  forbiddenInterceptor,
} from "blooket-frontend-tools";

import { DebugService } from "./gen/debugservice/v1/debugservice_connect";
import { Interceptor } from "@connectrpc/connect";

const base = "/apipb";

// define this in order to restrict some API calls to only certain routes
const pathConfig = undefined;

const buildId = process.env.REACT_APP_BLOOKET_BUILD_ID;

const interceptors: Interceptor[] = [
  // here we use a custom handler func in the forbiddenInterceptor so we don't
  // send users to the id service when they are trying to debug something
  forbiddenInterceptor(() => {
    console.error("403 response; aborting");
  }),
];
const debugbackend = createConnectWebClient(
  base,
  DebugService,
  buildId,
  pathConfig,
  interceptors,
);

export default debugbackend;
