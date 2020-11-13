# AUTO GENERATED FILE - DO NOT EDIT

traverser <- function(id=NULL, checkable=NULL, multiple=NULL, data=NULL, checked=NULL, selected=NULL, expanded=NULL) {
    
    props <- list(id=id, checkable=checkable, multiple=multiple, data=data, checked=checked, selected=selected, expanded=expanded)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'traverser',
        namespace = 'dash_traverser_component',
        propNames = c('id', 'checkable', 'multiple', 'data', 'checked', 'selected', 'expanded'),
        package = 'dashTraverserComponent'
        )

    structure(component, class = c('dash_component', 'list'))
}
