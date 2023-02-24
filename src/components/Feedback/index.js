import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isClick: true}

  displayFeedback = () => {
    this.setState({isClick: false})
  }

  render() {
    const {isClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-bg-container">
        <div className="feedback-display-container">
          {isClick ? (
            <div>
              <h1 className="heading">
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emoji-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id}>
                    <button className="button" onClick={this.displayFeedback}>
                      <img
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        className="emoji-icon"
                      />
                      <p>{eachEmoji.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <li className="love-emoji">
              <img src={loveEmojiUrl} alt="love emoji" />
              <h1>Thank you</h1>
              <p>
                We will use your feedback to improve our customer support performance
              </p>
            </li>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
