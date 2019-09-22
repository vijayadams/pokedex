exports.command = function (selector, idx, callback) {
    var self = this;
  
    this.execute(
      function (css, idx) {
        document.querySelectorAll(css)[idx].click();
        return true;
      },
  
      [selector, idx],
  
      function (result) {
        if (result.status == -1)
          console.log(result);
  
        if (typeof callback === "function") {
          callback.call(self, result);
        }
      }
  
    );
    return this;
  };  