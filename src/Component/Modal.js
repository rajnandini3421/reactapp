import React, { Component } from 'react'

class ModalExample extends Component {
  state = { open: false }

  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state

    return (
        <div class="ui modal">
        <i class="close icon"></i>
        <div class="header">
          Modal Title
        </div>
        <div class="image content">
          <div class="image">
            An image can appear on left or an icon
          </div>
          <div class="description">
            A description can appear on the right
          </div>
        </div>
        <div class="actions">
          <div class="ui button">Cancel</div>
          <div class="ui button">OK</div>
        </div>
      </div>
    )
  }
}

export default ModalExample