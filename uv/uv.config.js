(() => {
    let uvPfx = "/uv/";
    let loc = self.location.pathname.includes(uvPfx)
        ? self.location.pathname.substring(
              0,
              self.location.pathname.indexOf(uvPfx),
          )
        : self.location.pathname.substring(
              0,
              self.location.pathname.lastIndexOf("/"),
          );

    self.__uv$config = {
        prefix: uvPfx + "service/",
        encodeUrl: Ultraviolet.codec.xor.encode,
        decodeUrl: Ultraviolet.codec.xor.decode,
        handler: loc + uvPfx + "uv.handler.js?v=4",
        client: loc + uvPfx + "uv.client.js?v=4",
        bundle: loc + uvPfx + "uv.bundle.js?v=4",
        config: loc + uvPfx + "uv.config.js?v=4",
        sw: loc + uvPfx + "uv.sw.js?v=4",
        stockSW: loc + uvPfx + "sw.js?v=4",
        loc: loc,
    };
})();