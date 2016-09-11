"use strict";
var router_1 = require('@angular/router');
var activityResume_component_1 = require("./activityResume.component");
var pageNotFound_component_1 = require("./error/pageNotFound.component");
var appRoutes = [
    { path: '', component: activityResume_component_1.ActivityResumeComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map