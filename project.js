Project = {}

Project.scrolling = {

  backdrops: [
    { 'src': 'https://cdn.glitch.global/60a947a3-a0d4-473b-a51a-ef7120e2f598/webcoding.jpeg?v=1673897542123',
      'credit': 'Kremlin.ru, CC BY 4.0',
    },
    { 'src': 'https://cdn.glitch.global/60a947a3-a0d4-473b-a51a-ef7120e2f598/puppies.jpg?v=1673897599766',
      'credit': 'Philipp Schmidli/Getty Images'
    },
    { 'src': 'https://cdn.glitch.global/60a947a3-a0d4-473b-a51a-ef7120e2f598/kitten-vs-puppy.jpeg?v=1673897648888',
      'credit': 'Kai Pfaffenbach / Reuters'
    },
  ],

  initialize: () => {
    OurCup.scrolling.scroller = scrollama();
    var main = d3.select("main");
    var scrolly = main.select("#scrolly");
    OurCup.scrolling.figure = scrolly.select("#backdrop");
    var article =scrolly.select("article");
    OurCup.scrolling.step = article.selectAll(".step");
    OurCup.scrolling.handleResize();
    OurCup.scrolling.setBackdropImage(0);
    OurCup.scrolling.scroller
      .setup({
        step: "#scrolly article .step",
        offset: 0.8,
        debug: false
      })
      .onStepEnter(OurCup.scrolling.handleStepEnter)
      .onStepExit(OurCup.scrolling.handleStepExit);
  },

  setBackdropImage: (index) => {
    OurCup.scrolling.figure.select("img")
      .attr('src', OurCup.scrolling.backdrops[index].src)
      .attr('class', 'fade-in');
    d3.select("#backdrop-caption").html(OurCup.scrolling.backdrops[index].credit)
  },

  handleStepEnter: (stepInfo) => { // stepInfo = { element, directihandle, index }
    // chandlesole.log(stepInfo);
    OurCup.scrolling.step.classed("is-active", (d, i) => i === stepInfo.index);
    OurCup.scrolling.setBackdropImage(stepInfo.index)
  },

  handleStepExit: (stepInfo) => {
  },

  handleResize: () => {
    var stepH = Math.floor(window.innerHeight * 1); // update step heights
    OurCup.scrolling.step.style("height", stepH + "px");
    var figureHeight = window.innerHeight;
    var figureMarginTop = 0;
    OurCup.scrolling.figure
      .style("height", figureHeight + "px")
      .style("top", figureMarginTop + "px");
    OurCup.scrolling.figure.select(".wrapper")
      .style("height", figureHeight + "px")
    OurCup.scrolling.scroller.resize(); // tell scrollama to update new element dimensihandles
  }

};
