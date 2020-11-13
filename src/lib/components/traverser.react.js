import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { Tree } from 'antd';
//import 'antd/dist/antd.min.css'
const TreeNode = Tree.TreeNode;

function getNodeById(id, node){
    var reduce = [].reduce;
    function runner(result, node){
        if(result || !node) return result;
        return node.key === id && node || //is this the proper node?
            runner(null, node.children) || //process this nodes children
            reduce.call(Object(node), runner, result);  //maybe this is some ArrayLike Structure
    }
    return runner(null, node);
}

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class traverser extends Component {
    constructor(props) {
      super(props);
      this.renderTreeNode = this.renderTreeNode.bind(this)
      this.state = {
        expandedKeys: ["0"],
        selectedKeys: [],
        initialLoad: true
      };
    }
    //<><div>{nodeData.title}</div><div>{nodeData.help}</div></>
    //return <TreeNode key={nodeData.key} title={<><div>{nodeData.title}</div><div>{nodeData.help}</div></>} icon={nodeData.icon} isLeaf={nodeData.isLeaf}>{
    renderTreeNode(nodeData) {
      return <TreeNode key={nodeData.key} title={<>{nodeData.title}<span className="right_bullet">{nodeData.help}</span></>} icon={nodeData.icon} isLeaf={nodeData.isLeaf}>{
              nodeData.children ?
                nodeData.children.map(ch => this.renderTreeNode(ch)) : ''}
          </TreeNode>
    }

    // this only gets called if you use the open/close arrow buttons to expand the tree.
    onExpand = (expandedKeys, { expanded, node }) => {
      this.setState({ expandedKeys });
    }

    render() {
        const {
          id, checkable, multiple, checked, expanded,
          selected, setProps, data} = this.props;

        return (
            <div id={id}>
                <Tree
                  checkable={false}
                  multiple={false}
                  showIcon
                  defaultExpandedKeys={expanded}
                  defaultSelectedKeys={selected}
                  defaultCheckedKeys={checked}
                  onCheck = {e => setProps({checked: e})}
                  onSelect = {e => {
                      this.setState({selectedKeys: e});
                      const {expandedKeys} = this.state;  // "{expandedKeys}" extracts "expandedKeys" out of "this.state"
                      const test_for_already_in = expandedKeys.includes(e[0]);
                      // console.log("hello peter...");
                      if (test_for_already_in) {
                          // if this key is already in expandedKeys, then remove
                          const index = expandedKeys.indexOf(e[0]);
                          if (index > -1) {
                              expandedKeys.splice(index, 1);
                          }
                          this.setState({expandedKeys: expandedKeys})
                          this.setState({selectedKeys: []});  // no keys expanded
                      } else {
                          // if this key is not in expandedKeys, then expand
                          const node_data = getNodeById(e[0], data)
                          if (node_data.isLeaf) {
                              // Don't add if this is a leaf
                          } else {
                              // If this is not a leaf
                              this.setState({expandedKeys: expandedKeys.concat(e)})  // expand if it is a tree
                              this.setState({selectedKeys: []});  // can't select trees
                          }
                      }

                      return setProps({selected: e})
                  }}
                  expandedKeys={this.state.expandedKeys}
                  selectedKeys={this.state.selectedKeys}
                  onExpand={this.onExpand}
                >
                  {data ? this.renderTreeNode(data) : ''}
                </Tree>
            </div>
        );
    }
}


const PropTreeNodeShape = {
  /**
   * Node ID
   */
  key: PropTypes.string.isRequired,
  /**
   * Disables the node (Default - false)
   */
  disabled: PropTypes.bool,
  /**
   * Disables the checkbox of the  node (Default - false)
   */
  disableCheckbox: PropTypes.bool,
  /**
   * Set whether the treeNode can be selected (Default - true)
   */
  selectable: PropTypes.bool,

  /**
   * Node text
   */
  title: PropTypes.string,
};

const PropTreeNode = PropTypes.shape(PropTreeNodeShape);
PropTreeNodeShape.children = PropTypes.arrayOf(PropTreeNode);


traverser.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Adds a Checkbox before the treeNodes (Default - false)
     */

    checkable: PropTypes.bool,
    /**
     * Allows selecting multiple treeNodes (Default - false)
     */
    multiple: PropTypes.bool,

    /**
     * Tree data
     */
    data: PropTreeNode,

    /**
     * List of keys of checked nodes.
     */
    checked: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of keys of selected nodes.
     */
    selected: PropTypes.arrayOf(PropTypes.string),

    /**
     * List of keys of expanded nodes.
     */
    expanded: PropTypes.arrayOf(PropTypes.string),

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};


traverser.defaultProps = {
  data: {
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
  },
  checkable: false,
  multiple: true,
  checked: [],
  selected: [],
  expanded: []
};
