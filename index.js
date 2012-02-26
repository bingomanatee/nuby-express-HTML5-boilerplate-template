var util = require('util');

module.exports = {
    name:'h5',
    prefix:'',
    static:'public',

    on_render:function (req_state, params, done) {
        console.log('layout rendering: %s', util.inspect(params));

        for (var prop in _defaults){
            if (!params.hasOwnProperty(prop)){
                params[prop] = _defaults[prop];
            }
        }
        done();
    }

}

var _defaults = {
    header:'HEADER',
    body:'',
    footer:'FOOTER',
    error: 'This is an error',
    info:false
}