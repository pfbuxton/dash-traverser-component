% Auto-generated: do not edit by hand
\name{traverser}

\alias{traverser}

\title{traverser component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
traverser(id=NULL, checkable=NULL, multiple=NULL, data=NULL,
checked=NULL, selected=NULL, expanded=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks}

\item{checkable}{Logical. Adds a Checkbox before the treeNodes (Default - false)}

\item{multiple}{Logical. Allows selecting multiple treeNodes (Default - false)}

\item{data}{Tree data}

\item{checked}{List of characters. List of keys of checked nodes.}

\item{selected}{List of characters. List of keys of selected nodes.}

\item{expanded}{List of characters. List of keys of expanded nodes.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

