export const getTime = () => {
   const date = new Date();

   const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;

   return time;
}

export const getInfo = () => {
   const stack = new Error().stack;

   if (!stack) return { fileName: 'Failed', logLine: 'Failed' };

   const line = stack.split('\n')[3];

   if (!line) return { fileName: 'Failed', logLine: 'Failed' };

   const body = line.split('/').pop();

   const fileName = body.split(':')[0].split('?')[0];

   const logLine = body.split(':')[1];

   return { fileName, logLine };
}
