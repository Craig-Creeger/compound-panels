Compound Panels
===============

Standard (client-side) App
--------------------------
This is a React component that can render:
  * A standard accordion panel (one panel is always visible)
  * A collapsible accordion panel (it is possible to close all panels)
  * A series of independent panels.

Regardless of which type of panel is rendered, it is possible to explicity state which panels should
be expanded or not when the page is first loaded. To do that, pass an array containing panels that
should be open. For example, to have all panels collapsed on page load, you would call the component
like this:

    <CompoundPanels activePanels={[]} panelsType="accordion">
      <div title="Panel heading goes here">
        <p>Panel content goes here</p>
      </div>
    </CompoundPanels>

To see a demo,
  1. Clone this repo.
  2. `npm install`
  3. `npm start`
  4. Browse http://localhost:8080


Server-Side App
---------------
There is also a version that does React rendering on the server. It can be found in branch
`serverSideRendering`. That version only uses standard accordion panels.
