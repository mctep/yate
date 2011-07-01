Yate.AST.inlineGrep = {

    options: {
        base: 'inlineExpr'
    },

    _init: function(expr, predicate) {
        this.Expr = expr;
        this.Predicate = predicate;
    },

    _type: Yate.Types.NODESET,

    validate: function() {
        if (!this.Expr.type( Yate.Types.NODESET )) {
            this.Expr.error('Type should be NODESET');
        }
    }

};
