

module.exports = {
    name:'h5',
    prefix:'',
    static:'public',

    on_render:function (req_state, params, done) {
        ['header', 'body', 'footer'].forEach(function(prop){
            if (!params.hasOwnProperty(prop)){
                params[prop] = prop.toUpperCase();
            }
        })
        done();
    }

}