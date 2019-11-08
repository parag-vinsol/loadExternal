class LoadExternalContent {
  constructor(blogId) {
    this.blog = $(blogId)
  }
  init() {
    this.createTargetDiv();
    this.blog.find("li").click(this.addContent)
  }
  addContent = (event) => {
    event.preventDefault();
    $(event.currentTarget).find("div").load(`data/blog.html #${$(event.currentTarget).find("h3").data("blogNo")}`);
  }
  createTargetDiv() {
    let count = 1;
    this.blog.find("h3").each(function() {
      $(this).data(`blogNo`,`post${count}`)
      count = count + 1;
    })
    this.blog.find("li").append("<div />")
  }
}

var loadExternalContent = new LoadExternalContent("#blog");
loadExternalContent.init();
