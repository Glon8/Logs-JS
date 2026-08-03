export const getTime = () => {
   const date = new Date();

   const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

   return time;
}

export const getInfo = () => {
   const stack = new Error().stack;

   /*if (!stack) return { fileName: 'Failed', logLine: 'Failed' };

   const line = stack.split('\n')[2];

   const fileName = line.split('/').pop().split(':')[0];

   const match = line.match(/:(\d+):\d+\)?$/);

   const logLine = match ? match[1] : 'unknown';*/

   if (!stack) return { fileName: 'Failed', logLine: 'Failed' };

   const line = stack.split('\n')[2];

   if (!line) return { fileName: 'Failed', logLine: 'Failed' };

   const body = line.split('/').pop();

   const fileName = body.split(':')[0].split('?')[0];

   const logLine = body.split(':')[1];

   return { fileName, logLine };
}
