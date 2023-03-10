// One trick to organizing code is to put related functions inside of an object,
// so they are under the same "namespace". This helps maek readable code that is
// easier to maintain in the long term.
// TODO: replace use of `document.getElementByXXX` with `d3.select` so it is more readable

/* globals scrollama */

const Project = {};

Project.scroll1 = {
  // these hold references to helpers and rendered page elements (filled in by `initialize`)
  scroller: undefined, // an instance of scrollama
  steps: undefined, // an array of all the step elements
  wrapperElementId: 'chapter-1', // RB: I put the id of the element that has steps in it here, so it is easy to change in one place
  
  // a list of the backdrop images, ordered so they match the `step` elements on the page
  backdrops: [
    {
      src: "https://cdn.glitch.global/97acdb46-a9d2-4dac-ad23-cb9e010ebc8f/C0026T01.JPG?v=1674671123934",
    },
  ],

  // set up the webpage to scroll
  initialize: () => {
    // grab the elements on the page that are related to the scrolling
    const scrollWrapper = document.getElementById(Project.scroll1.wrapperElementId);
    Project.scroll1.figure = scrollWrapper.getElementsByTagName("figure")[0];
   
    Project.scroll1.steps = Array.from(
      scrollWrapper.getElementsByClassName("step")
    ); // convert from HTMLCollection to Array for ease of use later
    // intialize the scrollama helper
    Project.scroll1.scroller = scrollama();
    Project.scroll1.scroller
      .setup({
        step: "#"+Project.scroll1.wrapperElementId+" .step",
        offset: 0.9,
        debug: false,
      })
      .onStepEnter(Project.scroll1.handleStepEnter)
      .onStepExit(Project.scroll1.handleStepExit);
    // setup the default view to be the right size and include first step
    Project.scroll1.handleResize();
    Project.scroll1.setBackdropImage(0); // remember: 0 means the first item in an array
  },

  // call this to switch the background image
  setBackdropImage: (index) => {
    const image = Project.scroll1.figure.getElementsByTagName("img")[0];
    //image.src = Project.scrolling.backdrops[index].src;
    //image.classList.add = 'fade-in';
    // TODO: make this caption text a link
    // RB: you aren't using <figcaption> tags to add credits to your images, so I think you can remove the next 2 lines of code
    document.getElementsByTagName("figcaption")[0].innerHTML =
      Project.scroll1.backdrops[index].credit;
  },

  // called by scrollama when the step is being entered
  handleStepEnter: (stepInfo) => {
    // stepInfo = { element, directihandle, index }
    // console.log(`Switched to step ${stepInfo.index}`);
    // TODO: add an `is-active` class on the step that we switched to (and remove from all others)
    // and switch the background image to match the step content
    Project.scroll1.setBackdropImage(stepInfo.index);
  },

  // called by scrollama when moving out of a step
  handleStepExit: (stepInfo) => {
    // we don't make any transitions when a step scrolls out of view
  },

  // called to get content to be the right size to fit the device
  handleResize: () => {
    const stepH = Math.floor(window.innerHeight * 1); // update step heights
    Project.scroll1.steps.forEach(
      (step) => (step.style.height = stepH + "px")
    );
    const figureHeight = window.innerHeight;
    const figureMarginTop = 0;
    Project.scroll1.figure.style.height = figureHeight + "px";
    Project.scroll1.figure.style.top = figureMarginTop + "px";
    Project.scroll1.figure.getElementsByClassName("wrapper")[0].style.height =
      figureHeight + "px";
    Project.scroll1.scroller.resize(); // tell scrollama to update new element dimensions
  },
};























Project.scroll2 = {
  // these hold references to helpers and rendered page elements (filled in by `initialize`)
  scroller: undefined, // an instance of scrollama
  steps: undefined, // an array of all the step elements
  wrapperElementId: 'chapter-3', // RB: I put the id of the element that has steps in it here, so it is easy to change in one place
  
  // a list of the backdrop images, ordered so they match the `step` elements on the page
  backdrops: [
    {
      src: "https://cdn.glitch.global/97acdb46-a9d2-4dac-ad23-cb9e010ebc8f/C0026T01.JPG?v=1674671123934",
    },
  ],

  // set up the webpage to scroll
  initialize: () => {
    // grab the elements on the page that are related to the scrolling
    const scrollWrapper = document.getElementById(Project.scroll2.wrapperElementId);
    Project.scroll2.figure = scrollWrapper.getElementsByTagName("figure")[0];
    
    Project.scroll2.steps = Array.from(
      scrollWrapper.getElementsByClassName("step")
    ); // convert from HTMLCollection to Array for ease of use later
    // intialize the scrollama helper
    Project.scroll2.scroller = scrollama();
    Project.scroll2.scroller
      .setup({
        step: "#"+Project.scroll2.wrapperElementId+" .step",
        offset: 0.9,
        debug: false,
      })
      .onStepEnter(Project.scroll2.handleStepEnter)
      .onStepExit(Project.scroll2.handleStepExit);
    // setup the default view to be the right size and include first step
    Project.scroll2.handleResize();
    Project.scroll2.setBackdropImage(0); // remember: 0 means the first item in an array
  },

  // call this to switch the background image
  setBackdropImage: (index) => {
    const image = Project.scroll2.figure.getElementsByTagName("img")[0];
    //image.src = Project.scrolling.backdrops[index].src;
    //image.classList.add = 'fade-in';
    // TODO: make this caption text a link
    // RB: you aren't using <figcaption> tags to add credits to your images, so I think you can remove the next 2 lines of code
    document.getElementsByTagName("figcaption")[0].innerHTML =
      Project.scroll2.backdrops[index].credit;
  },

  // called by scrollama when the step is being entered
  handleStepEnter: (stepInfo) => {
    // stepInfo = { element, directihandle, index }
    // console.log(`Switched to step ${stepInfo.index}`);
    // TODO: add an `is-active` class on the step that we switched to (and remove from all others)
    // and switch the background image to match the step content
    Project.scroll2.setBackdropImage(stepInfo.index);
  },

  // called by scrollama when moving out of a step
  handleStepExit: (stepInfo) => {
    // we don't make any transitions when a step scrolls out of view
  },

  // called to get content to be the right size to fit the device
  handleResize: () => {
    const stepH = Math.floor(window.innerHeight * 1); // update step heights
    Project.scroll2.steps.forEach(
      (step) => (step.style.height = stepH + "px")
    );
    const figureHeight = window.innerHeight;
    const figureMarginTop = 0;
    Project.scroll2.figure.style.height = figureHeight + "px";
    Project.scroll2.figure.style.top = figureMarginTop + "px";
    Project.scroll2.figure.getElementsByClassName("wrapper")[0].style.height =
      figureHeight + "px";
    Project.scroll2.scroller.resize(); // tell scrollama to update new element dimensions
  },
};
