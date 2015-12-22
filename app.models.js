var app = app || {};
var active = active || {};

app.models = app.models || {};

app.models.BaseModel = Backbone.Model.extend();
app.models.AuthenticationModel = Backbone.Model.extend();
app.models.ApiKeyModel = Backbone.Model.extend();

//active.someModel = new app.models.BaseModel();
