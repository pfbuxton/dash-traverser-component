import dash
import dash_html_components as html
from dash.dependencies import Input, Output, State

import dash_traverser_component

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

tree_symbol      = '\U0001f332'  # Evergreen Tree
number_symbol    = '\U0001F522'  # Input Numbers
signal_symbol    = '\U0001F4C8'  # Chart Increasing
structure_symbol = '\U0001F5C3'  # "Card File Box"
text_symbol      = '\U0001F4DD'  # Memo


app.layout = html.Div(
    children = [
        dash_traverser_component.traverser(
            id = 'input',
            multiple = False,
            checkable = False,
            checked = [],
            selected = [],
            data = {
                'title': 'TOP',
                'help': '',
                'isLeaf': False,
                'icon': tree_symbol,
                'key': '0',
                'children': [
                    {
                        'title': 'MAGNETICS',
                        'help': 'Magnetic diagnostics',
                        'isLeaf': False,
                        'icon': tree_symbol,
                        'key': '\TOP::MAGNETICS',
                        'children': [
                            {
                                'title': 'BP',
                                'key': '\TOP::MAGNETICS:BP',
                                'icon': signal_symbol,
                                'isLeaf': True,
                                'help': 'Mirnov magnetic diagnostics'
                            },
                            {
                                'title': 'FL',
                                'key': '\TOP::INPUTS:FL',
                                'icon': signal_symbol,
                                'isLeaf': True,
                                'help': 'Flux loop magnetic diagnostics'
                            },
                        ],
                    },
                    {
                        'title': 'EFIT',
                        'help': 'Plasma reconstruction',
                        'isLeaf': False,
                        'icon': tree_symbol,
                        'key': '\TOP::EFIT',
                        'children': [
                            {
                                'title': 'RUN01',
                                'key': '\TOP::EFIT:RUN01',
                                'icon': structure_symbol,
                                'isLeaf': False,
                                'help': 'EFIT code run with the assumption: x=3',
                                'children': [
                                    {
                                        'title': 'IP',
                                        'key': '\TOP::EFIT.RUN01:IP',
                                        'icon': signal_symbol,
                                        'isLeaf': True,
                                        'help': 'Plasma current'
                                    }
                                ]
                            },
                            {
                                'title': 'RUN02',
                                'key': '\TOP::EFIT:RUN02',
                                'icon': structure_symbol,
                                'isLeaf': False,
                                'help': 'EFIT code run with the assumption: x=13',
                                'children': [
                                    {
                                        'title': 'IP',
                                        'key': '\TOP::EFIT.RUN02:IP',
                                        'icon': signal_symbol,
                                        'isLeaf': True,
                                        'help': 'Plasma current'
                                    }
                                ]
                            },
                        ],
                    }
                ]
            }
        ),
        html.Button('Plot', id='submit_button', n_clicks=0),
        html.Div(id='output-selected'),
    ]
)


@app.callback(Output('output-selected', 'children'),
    [Input('submit_button', 'n_clicks')],
    [State('input', 'selected')])
def _display_selected(_, selected):
    return 'You have selected: '+selected[0]


if __name__ == '__main__':
    app.run_server(debug=True)
