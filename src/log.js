import { debug, config } from './core/settings.js';
import { getTime, getInfo } from './core/helpers.js';

export const log = (...args) => {
   if(!debug) return;
   
   if(args.length == 1 &&
   args[0] !== null &&
   typeof args[0] === 'object' &&
   !Array.isArray(args[0]) && 
   Object.keys(args[0]).length > 0) {
      const modifiers = [];
      const tag = args[0].tag;
      const data = args[0].data;

      if(config.timestamp) modifiers.push(`[${getTime()}]`);

      if (tag == 'i' || tag == 'w' || tag == 'e') {
         // info | warning | error
         if (tag === 'i') modifiers.push(`[INFO]`);
         else if (tag === 'w') modifiers.push(`[WARNING]`);
         else modifiers.push(`[ERROR]`);
      }
      else if (typeof tag == 'string') modifiers.push(`[${tag}]`); 

      if(config.path || config.line){
         const logInfo = getInfo();

         if(config.path) modifiers.push(`[${logInfo.fileName}]`);

         if(config.line) modifiers.push(`[${logInfo.logLine}]`);
      }

      modifiers.push(data);

      console.log(...modifiers);
   }
   else console.log(...args);
}
