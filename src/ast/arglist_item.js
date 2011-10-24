yate.AST.arglist_item = {

    action: function() {
        var vars = this.parent.scope.vars;
        var name = this.Name;
        if (vars[name]) {
            this.error('Повторное определение аргумента ' + this.Name);
        }

        this.Vid = this.state.vid++;
        this.Type = yate.AST.var_type.ARGUMENT;

        vars[name] = this;
    },

    _getType: function() {
        if (this.Typedef == 'nodeset') { return yate.Types.NODESET; }
        if (this.Typedef == 'boolean') { return yate.Types.BOOLEAN; }
        return yate.Types.SCALAR;
    }

};
