/// <reference types="vite/client" />
// src/declarations.d.ts
declare module '@tawk.to/tawk-messenger-react';



interface ImportMetaEnv {
    readonly VITE_tawk_API_KEY: string;
 
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }