// One trick to organizing code is to put related functions inside of an object,
// so they are under the same "namespace". This helps maek readable code that is
// easire to maintain in the long term.
const Project = {};

Project.scrolling = {

  // these hold references to helpers and rendered page elements (filled in by `initialize`)
  scroller: undefined, // an instance of scrollama
  steps: undefined, // an array of all the step elements

  // a list of the backdrop images, ordered so they match the `step` elements on the page
  backdrops: [
    { 'src': 'https://cdn.glitch.global/60a947a3-a0d4-473b-a51a-ef7120e2f598/webcoding.jpeg?v=1673897542123',
      'credit': 'https://zapier.com/blog/learn-html-css/'
    },
    { 'src': 'https://cdn.glitch.global/60a947a3-a0d4-473b-a51a-ef7120e2f598/puppies.jpg?v=1673897599766',
      'credit': 'https://www.wisdompanel.com/en-us/blog/sibling-genetics-in-dogs'
    },
    { 'src': 'https://cdn.glitch.global/60a947a3-a0d4-473b-a51a-ef7120e2f598/kitten-vs-puppy.jpeg?v=1673897648888',
      'credit': 'https://www.marketwatch.com/story/owning-a-cat-vs-owning-a-dog-which-pet-makes-better-financial-sense-11649445375',
    },
  ],

  initialize: () => {
    // grab the elements on the page that are related to the scrolling
    const scollWrapper = document.getElementById("#scrolly");
    Project.scrolling.figure = scollWrapper.getElementsByTagName("figure");
    const article = scollWrapper.getElementsByTagName('article')[0];
    Project.scrolling.steps = article.getElementsByClassName(".step");
    Project.scrolling.handleResize();
    Project.scrolling.setBackdropImage(0);
    // intialize the scrollama helper
    Project.scrolling.scroller = scrollama();
    Project.scrolling.scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0.8,
        debug: false
      })
      .onStepEnter(Project.scrolling.handleStepEnter)
      .onStepExit(Project.scrolling.handleStepExit);
  },

  setBackdropImage: (index) => {
    Project.scrolling.figure.select("img")
      .attr('src', Project.scrolling.backdrops[index].src)
      .attr('class', 'fade-in');
    document.getElementsByTagName("figcaption")[0].html(Project.scrolling.backdrops[index].credit)
  },

  handleStepEnter: (stepInfo) => { // stepInfo = { element, directihandle, index }
    // chandlesole.log(stepInfo);
    Project.scrolling.step.classed("is-active", (d, i) => i === stepInfo.index);
    Project.scrolling.setBackdropImage(stepInfo.index)
  },

  handleStepExit: (stepInfo) => {
  },

  handleResize: () => {
    const stepH = Math.floor(window.innerHeight * 1); // update step heights
    Project.scrolling.steps.style("height", stepH + "px");
    const figureHeight = window.innerHeight;
    const figureMarginTop = 0;
    Project.scrolling.figure
      .style("height", figureHeight + "px")
      .style("top", figureMarginTop + "px");
    Project.scrolling.figure.select(".wrapper")
      .style("height", figureHeight + "px")
    Project.scrolling.scroller.resize(); // tell scrollama to update new element dimensihandles
  }

};
