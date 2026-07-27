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
   if(typeof timestamp == 'boolean') config.timestamp = time;
   if(typeof path == 'boolean') config.path = path;
   if(typeof line == 'boolean') config.line = line;
}

const getTime = () => {
   const date = new Date();

   const time = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');

   return time;
}

const getInfo = () => {
   const stack = new Error().stack;

   const line = stack.split('\n')[2];

   const fileName = line.split('/').pop().split(':')[0];

   const match = line.match(/:(\d+):\d+\)?$/);

   const logLine = match ? match[1] : 'unknown';

   return {fileName: fileName, logLine: logLine};
}

export const log = (type, ...args) => {
   let logTime, logType, logPath, logLine;

   if(config.timestamp) logTime = '[' + getTime() + ']';
   
   if (type == 'i' || type == 'w' || type == 'e') {
      // info | warning | error
      if (type == 'i') logType = '[INFO] ';
      else if (type == 'w') logType = '[WARNING] ';
      else logType = '[ERROR] ';     
   } 
   else if(typeof type == 'string') logType = '[' + type + '] ';

   if(config.path || config.line){
      const logInfo = getInfo();

      if(config.path) logPath = '[' + logInfo.fileName + '] ';

      if(config.line) logLine = '[ ' + logInfo.logLine + '] ';
   }
   
   console.log(logTime, logType, logPath, logLine, ...args);
}
