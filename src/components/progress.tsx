import * as React from "react"

export default class Progress extends React.Component<{}, { yPosition: number }> {
  constructor(props: any) {
    super(props)
    this.state = {
      yPosition: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event: any) {
    this.setState({
      yPosition: window.scrollY
    });
  }

  getSteps() {
    return [
      {
        title: '1. About me',
        breakpointStart: 0,
        breakpointEnd: 1000
      },
      {
        title: '2. Where I have worked',
        breakpointStart: 1000,
        breakpointEnd: 2000
      },
      {
        title: '3. Projects',
        breakpointStart: 2000,
        breakpointEnd: 4000
      },
      {
        title: '4. Other projects',
        breakpointStart: 4000,
        breakpointEnd: 8000
      },
    ]
  }

  render() {
    const { yPosition } = this.state

    return (
      <div style={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {this.getSteps().map(step => (
          <h3
            tabIndex={0}
            role="button"
            onClick={() => {
              window.scroll({ behavior: 'smooth', top: step.breakpointStart })
            }}
            style={{
              opacity: yPosition >= step.breakpointStart && yPosition < step.breakpointEnd ? 1 : '.4',
              margin: '1rem 0',
              color: 'white',
              textAlign: 'right',
              fontSize: '1.2em',
              cursor: 'pointer'
            }}
          >
            {step.title}
          </h3>
        ))}
      </div>
    )
  }
}