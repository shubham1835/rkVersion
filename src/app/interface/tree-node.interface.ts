export interface ITreeNode {
    label?: string;
    data?: any;
    icon?: any;
    expandedIcon?: any;
    collapsedIcon?: any;
    children?: ITreeNode[];
    leaf?: boolean;
    expanded?: boolean;
    type?: string;
    parent?: ITreeNode;
    partialSelected?: boolean;
    styleClass?: string;
    draggable?: boolean;
    droppable?: boolean;
    selectable?: boolean;
    ID?: any; // unique id for particular node to add
    key?: any; // unique id for particular node to add
}