import React from "react";

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    render() {
        const currentTab = this.props.tabs[0]
        const buttons = this.props.tabs.map((tab, index) => (
          <button key={index}>
            {tab.name}
          </button>
        ))
        return (
        <div>
            {buttons}
            {this.props.tabs.length && (
                <div className='content'>
                    {currentTab.content}
                 </div>
            )}
        </div>
        )
      }
}

export default Tabs;