yate.AST.jpath_context = {

    options: {
        base: 'inline_expr'
    },

    _init: function(context, jpath) {
        this.Context = context;
        this.JPath = jpath;
    },

    _type: yate.Types.NODESET,

    isLocal: function() {
        return this.Context.isLocal();
    },

    validate: function() {
        if (!this.Context.type( yate.Types.NODESET )) {
            this.Context.error('Type should be NODESET');
        }
    }

};
