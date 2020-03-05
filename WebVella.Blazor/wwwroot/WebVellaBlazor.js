var WebVellaCssLinkIncludedList = [];
var WebVellaJsSrcList = [];

window.WebVellaBlazor = {
   SetCssLink: function (file) {
      if (!WebVellaCssLinkIncludedList.includes(file)) {
         var link = document.createElement("link");
         document.head.insertBefore(link, document.head.lastChild);
         link.type = "text/css";
         link.rel = "stylesheet";
         //link.href = "/_content/WebVella.Blazor/WebVellaBlazor.min.css";
         link.href = "/_content/WebVella.Blazor/" + file;
         WebVellaCssLinkIncludedList.push(file);
      }
      return true;
   },
   SetJsScript: function (file) {
      if (!WebVellaJsSrcList.includes(file)) {
         var script = document.createElement("script");
         document.head.insertBefore(script, document.head.lastChild);
         script.type = "application/javascript";
         script.src = "/_content/WebVella.Blazor/" + file;
         WebVellaJsSrcList.push(file);
      }
      return true;
   },
   AddBodyCss: function () {
      if (Classname === "modal-open") {
         this.ChangeBodyPaddingRight("17px");
      }
      document.body.classList.add(Classname);
      return true;
   },
   RemoveBodyCss: function () {
      if (Classname === "modal-open") {
         this.ChangeBodyPaddingRight("");
      }
      document.body.classList.add(Classname);
      return true;
   },
   ChangeBodyPaddingRight: function (padding) {
        var dpi = window.devicePixelRatio;
        if (dpi === 1 || !padding) {
            document.body.style.paddingRight = padding;
        }
        return true;
    },
};

window.WebVellaBlazor.SetCssLink("WebVellaBlazor.css");