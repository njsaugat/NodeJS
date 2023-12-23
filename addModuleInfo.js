const fs=require('fs');
const { type } = require('os');

// fs.writeFileSync('./fsBYjs/moduleinfo.txt',`[Function: Module] {
//     builtinModules: [
//       '_http_agent',       '_http_client',        '_http_common',
//       '_http_incoming',    '_http_outgoing',      '_http_server',
//       '_stream_duplex',    '_stream_passthrough', '_stream_readable',
//       '_stream_transform', '_stream_wrap',        '_stream_writable',
//       '_tls_common',       '_tls_wrap',           'assert',
//       'async_hooks',       'buffer',              'child_process',
//       'cluster',           'console',             'constants',
//       'crypto',            'dgram',               'dns',
//       'domain',            'events',              'fs',
//       'http',              'http2',               'https',
//       'inspector',         'module',              'net',
//       'os',                'path',                'perf_hooks',
//       'process',           'punycode',            'querystring',
//       'readline',          'repl',                'stream',
//       'string_decoder',    'sys',                 'timers',
//       'tls',               'trace_events',        'tty',
//       'url',               'util',                'v8',
//       'vm',                'worker_threads',      'zlib'
//     ],
//     _cache: [Object: null prototype] {
//       '/home/njsaugat/codePlay/nodeJs/linuxOS.js': Module {
//         id: '.',
//         path: '/home/njsaugat/codePlay/nodeJs',
//         exports: {},
//         parent: null,
//         filename: '/home/njsaugat/codePlay/nodeJs/linuxOS.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       }
//     },
//     _pathCache: [Object: null prototype] {
//       '/home/njsaugat/codePlay/nodeJs/linuxOS.js\u0000': '/home/njsaugat/codePlay/nodeJs/linuxOS.js'
//     },
//     _extensions: [Object: null prototype] {
//       '.js': [Function],
//       '.json': [Function],
//       '.node': [Function]
//     },
//     globalPaths: [
//       '/home/njsaugat/.node_modules',
//       '/home/njsaugat/.node_libraries',
//       '/usr/lib/x86_64-linux-gnu/nodejs',
//       '/usr/share/nodejs',
//       '/usr/lib/nodejs'
//     ],
//     _debug: [Function: deprecated],
//     _findPath: [Function],
//     _nodeModulePaths: [Function],
//     _resolveLookupPaths: [Function],
//     _load: [Function],
//     _resolveFilename: [Function],
//     createRequireFromPath: [Function: createRequireFromPath],
//     createRequire: [Function: createRequire],
//     _initPaths: [Function],
//     _preloadModules: [Function],
//     syncBuiltinESMExports: [Function: syncBuiltinESMExports],
//     Module: [Circular],
//     runMain: [Function: executeUserEntryPoint],
//     findSourceMap: [Function: findSourceMap],
//     SourceMap: [class SourceMap]
//   }`)

const data=fs.readFileSync('./fsBYjs/moduleinfo.txt','utf-8')
// console.log(typeof(data))
// console.log(data.length);
// let count=0;
// for(let i=0;i<data.length;i++){
//     if(data[i]==='\n'){
//         count++
//     }
// }
// console.log(count)

const splitValue=data.split('\n')
splitValue.forEach((line)=>{
    // console.log(line)
    if(line.charAt(7)==='_'){
        console.log(line)
    }
    // console.log(line.charAt(7));
})
// [...data];
// console.log(splitValue)

// let value=Array.from(data,'\n')
// console.log(value);
// for(int i=0;)