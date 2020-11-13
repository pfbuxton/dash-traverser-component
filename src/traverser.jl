# AUTO GENERATED FILE - DO NOT EDIT

export traverser

"""
    traverser(;kwargs...)

A traverser component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks
- `checkable` (Bool; optional): Adds a Checkbox before the treeNodes (Default - false)
- `multiple` (Bool; optional): Allows selecting multiple treeNodes (Default - false)
- `data` (optional): Tree data
- `checked` (Array of Strings; optional): List of keys of checked nodes.
- `selected` (Array of Strings; optional): List of keys of selected nodes.
- `expanded` (Array of Strings; optional): List of keys of expanded nodes.
"""
function traverser(; kwargs...)
        available_props = Symbol[:id, :checkable, :multiple, :data, :checked, :selected, :expanded]
        wild_props = Symbol[]
        return Component("traverser", "traverser", "dash_traverser_component", available_props, wild_props; kwargs...)
end

