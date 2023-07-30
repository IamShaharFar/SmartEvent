/// <reference types="react-scripts" />
// global.d.ts

declare global {
    namespace JSX {
      interface IntrinsicElements {
        ['add-to-calendar-button']: CustomElement<AddToCalendarButton>;
      }
    }
  }