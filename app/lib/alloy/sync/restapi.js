//
// blog.clearlyionnovative.com
// twitter: @aaronksaunders
//
// this code is inspiried by https://github.com/viezel/napp.alloy.adapter.restapi
//

function InitAdapter(config) {
    return {};
}

function apiCall(_options, _callback) {

    var xhr = Ti.Network.createHTTPClient({
        timeout : 5000
    });

    //Prepare the request
    xhr.open(_options.type, _options.url);

    xhr.onload = function() {
        _callback({
            success : true,
            responseText : xhr.responseText || null,
            responseData : xhr.responseData || null
        });
    };

    //Handle error
    xhr.onerror = function() {
        _callback({
            'success' : false,
            'responseText' : xhr.responseText
        });
        //Ti.API.error('[REST API] apiCall ERROR: ' + xhr.responseText);
    };
    for (var header in _options.headers) {
        xhr.setRequestHeader(header, _options.headers[header]);
    }

    if (_options.beforeSend) {
        _options.beforeSend(xhr);
    }

    xhr.send(_options.data || null);
}

function Sync(method, model, opts) { //debugger;

    var methodMap = {
        'create' : 'POST',
        'read' : 'GET',
        'update' : 'PUT',
        'delete' : 'DELETE'
    };

    var type = methodMap[method];
    var params = _.extend({}, opts);
    params.type = type;

    //set default headers
    params.headers = params.headers || {};

    // We need to ensure that we have a base url.
    if (!params.url) {
        params.url = model.url();
        if (!params.url) {
           // Ti.API.error("[REST API] ERROR: NO BASE URL");
            return;
        }
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (Alloy.Backbone.emulateJSON) {
        params.contentType = 'application/x-www-form-urlencoded';
        params.processData = true;
        params.data = params.data ? {
            model : params.data
        } : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (Alloy.Backbone.emulateHTTP) {
        if (type === 'PUT' || type === 'DELETE') {
            if (Alloy.Backbone.emulateJSON)
                params.data._method = type;
            params.type = 'POST';
            params.beforeSend = function(xhr) {
                params.headers['X-HTTP-Method-Override'] = type;
            };
        }
    }

    //json data transfers
    params.headers['Content-Type'] = 'application/json';

    switch(method) {

        case 'delete' :
        case 'create' :
        case 'update' :
            throw "Not Implemented";
            break;

        case 'read':
            apiCall(params, function(_response) {
                if (_response.success) {
                    var data = JSON.parse(_response.responseText);
                    params.success(data, _response.responseText);
                } else {
                    params.error(JSON.parse(_response.responseText), _response.responseText);
                   // Ti.API.error('[REST API] ERROR: ' + _response.responseText);
                }
            });
            break;
    }

};

//we need underscore
var _ = require("alloy/underscore")._;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config) {
    config = config || {};
    InitAdapter(config);
    return config;
};

module.exports.afterModelCreate = function(Model) {
    Model = Model || {};
    Model.prototype.config.Model = Model;
    return Model;
};