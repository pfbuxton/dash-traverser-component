# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class traverser(Component):
    """A traverser component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks
- checkable (boolean; default False): Adds a Checkbox before the treeNodes (Default - false)
- multiple (boolean; default True): Allows selecting multiple treeNodes (Default - false)
- data (default {
  title: 'Parent',
  icon: 'd',
  key: '0',
  children: [{
    title: 'Child',
    icon: 'd',
    key: '0-0',
    children: [
      { title: 'Subchild', key: '0-0-1', icon: 'a', },
      { title: 'Subchild', key: '0-0-2', icon: 'b' },
      { title: 'Subchild', key: '0-0-3', icon: 'c' },
    ],
  }]
}): Tree data
- checked (list of strings; optional): List of keys of checked nodes.
- selected (list of strings; optional): List of keys of selected nodes.
- expanded (list of strings; optional): List of keys of expanded nodes."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, checkable=Component.UNDEFINED, multiple=Component.UNDEFINED, data=Component.UNDEFINED, checked=Component.UNDEFINED, selected=Component.UNDEFINED, expanded=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'checkable', 'multiple', 'data', 'checked', 'selected', 'expanded']
        self._type = 'traverser'
        self._namespace = 'dash_traverser_component'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'checkable', 'multiple', 'data', 'checked', 'selected', 'expanded']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(traverser, self).__init__(**args)
