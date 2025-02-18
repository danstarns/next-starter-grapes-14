"use client";

import grapesjs, { Editor } from 'grapesjs';
import GjsEditor from '@grapesjs/react';

export default function DefaultEditor() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <GjsEditor
      // Pass the core GrapesJS library to the wrapper (required).
      // You can also pass the CDN url (eg. "https://unpkg.com/grapesjs")
      grapesjs={grapesjs}
      // Load the GrapesJS CSS file asynchronously from URL.
      // This is an optional prop, you can always import the CSS directly in your JS if you wish.
      // GrapesJS init options
      options={{
        height: '100vh',
        storageManager: false,
      }}
      onEditor={onEditor}
    />
  );
}
