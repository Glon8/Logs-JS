const getTime = () => {
   const date = new Date();
 
   const time = `${String(date.getHours()).padStart(2,'0')} :  
   ${String(date.getMinutes()).padStart(2, '0')} : 
   ${String(date.getSeconds()).padStart(2, '0')}`;
 
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
