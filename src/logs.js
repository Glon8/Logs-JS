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

export const setProperties = (timestamp, path, line) => {
   if(typeof timestamp == 'boolean') config.timestamp = timestamp;
   if(typeof path == 'boolean') config.path = path;
   if(typeof line == 'boolean') config.line = line;
}

const getTime = () => {
   const date = new Date();

   const time = String(date.getHours()).padStart(2,'0') + ':' + String(date.getMinutes()).padStart(2,'0') + ':' + String(date.getSeconds()).padStart(2,'0');

   return time;
}

const getInfo = () => {
   const stack = new Error().stack;

   const line = stack.split('\n')[2];

   if(!stack) return { fileName: 'Failed', logLine: 'Failed'};

   const fileName = line.split('/').pop().split(':')[0];

   const match = line.match(/:(\d+):\d+\)?$/);

   const logLine = match ? match[1] : 'unknown';

   return {fileName, logLine};
}

export const log = (tag, ...args) => {
   const modifiers = [];

   if(config.timestamp) modifiers.push(`[${getTime()}]`);
   
   if (tag == 'i' || tag == 'w' || tag == 'e') {
      // info | warning | error
      if (tag === 'i') modifiers.push(`[INFO]`);
      else if (tag === 'w') modifiers.push(`[WARNING]`);
      else modifiers.push(`[ERROR]`);
   }
   else if (typeof tag == 'string') modifiers.push(`[${type}]`); 

   if(config.path || config.line){
      const logInfo = getInfo();

      if(config.path) modifiers.push(`[${logInfo.fileName}]`);
      
      if(config.line) modifiers.push(`[${logInfo.logLine}]`);
   }

   modifiers.push(...args);
  
   console.log(...modifiers)
}
