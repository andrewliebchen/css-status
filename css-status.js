Stylesheets = new Meteor.Collection('stylesheets');

if (Meteor.isClient) {
  Template.cssInput.events({
    'click #submit_css_input': function(event, template) {
      var cssInput = template.find('#css_input');
      Meteor.call('parseCSS', cssInput.value);
      cssInput.val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    'parseCSS': function(cssInput) {
      var parsedCSS = parseCSS(cssInput);
      Stylesheets.insert(parsedCSS);
    }
  });
}
