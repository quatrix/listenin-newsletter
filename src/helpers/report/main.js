module.exports.register = function (Handlebars, options, params)  { 
  Handlebars.registerHelper("everyOther", function (index, amount, scope) {
      if ( ++index % amount ) 
          return scope.inverse(this);
      else 
          return scope.fn(this);
  });

  Handlebars.registerHelper('eachData', function(context, options) {
      var fn = options.fn, inverse = options.inverse, ctx;
      var ret = "";

      if(context && context.length > 0) {
        for(var i=0, j=context.length; i<j; i++) {
          ctx = Object.create(context[i]);
          ctx.index = i;
          ret = ret + fn(ctx);
        }
      } else {
        ret = inverse(this);
      }
      return ret;
  }); 

};
