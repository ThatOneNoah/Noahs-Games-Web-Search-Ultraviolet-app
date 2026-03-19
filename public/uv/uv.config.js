self.__uv$config = {
    prefix: '/uv/service/',
    
    // 👇 THIS IS THE MAGIC LINE. We use a public community server!
    bare: 'https://tomp.app/', 
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
