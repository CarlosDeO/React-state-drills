import React from "react";

export default class Accordion extends React.Component {
    static defaultProps = {sections: []}
    state = {
        currentSectionIndex : 0
    };
    handleButtonClick = (index) => {
        this.setState({ currentSectionIndex: index })
      }
    renderButton = () => {
        return this.props.sections.map((sections, index) => (
            <li>
            <button key={index} onClick={() => this.handleButtonClick(index)}>
              {sections.title}
            </button>
            </li>
          ))
    }
    // renderButton = () => {
    //     return (
    //         <button key={index} onClick={() => this.handleButtonClick(index)}>
    //           {sections.title}
    //         </button>
    //       )
    // }
    renderContent() {
        const currentSection = this.props.sections[this.state.currentSectionIndex]
        if (currentSection) {
        return (
          <div className='content'>
            {currentSection.content}
          </div>
        )
        }
      }
    render() {
        return (
          <div>
            <ul> 
                   {this.renderButton()}
            </ul>
            <p>{this.renderContent()}</p>
          </div>
        )
      }
}