let debug = true;

const config = {
   timestamp: true,
   path: true,
   line: true,
};
 
export const debugOff = () => {
   debug = false;
}

export const setDebug = (state) => {
   if(typeof state != 'boolean') return;
   debug = state;
}

export const setConfig = (settings) => {
   if(settings == null ||
   typeof settings !== 'object' ||
   Array.isArray(settings) ||
   Object.keys(settings).length == 0) return;

   if(typeof settings.timestamp == 'boolean')
      config.timestamp = settings.timestamp;
   if(typeof settings.path == 'boolean')
      config.path = settings.path;
   if(typeof settings.line == 'boolean')
      config.line = settings.line;
}
