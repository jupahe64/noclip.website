
import { DeswizzleRequest, deswizzle } from "../gx2_swizzle";

onmessage = (e: MessageEvent) => {
    const req: DeswizzleRequest = e.data;
    const deswizzledSurface = deswizzle(req.surface, req.buffer, req.mipLevel);
    // @ts-ignore
    // postMessage here should be from the worker context, not sure why this file isn't treated as being in worker context.
    postMessage(deswizzledSurface, [deswizzledSurface.pixels.buffer]);
};
