export const getTime = () => {
   const date = new Date();

   const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

   return time;
}

export const getInfo = () => {
   const stack = new Error().stack;

   const line = stack.split('\n')[2];

   if (!stack) return { fileName: 'Failed', logLine: 'Failed' };

   const caller = line.find(item => !item.includes('logs-js'));

   //const fileName = line.split('/').pop().split(':')[0];

   //const match = line.match(/:(\d+):\d+\)?$/);

   const fileName = caller.split('/').pop().split(':')[0];

   const match = caller.match(/:(\d+):\d+\)?$/);

   const logLine = match ? match[1] : 'unknown';

   return { fileName, logLine };
}
