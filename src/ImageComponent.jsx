import React from "react"
class ImgComponent extends React.Component {
    render() {
        return(
            <img src={this.props.srcImg} alt={this.props.altImg} width={this.props.widthImg}/>
              )
    }
}
export default ImgComponent