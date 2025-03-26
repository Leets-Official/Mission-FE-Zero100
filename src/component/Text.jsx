import PropTypes from 'prop-types'

export default function Text({ children, style }) {
  const textStyle = {
    fontSize: '40px',
    lineHeight: '1.6',
    margin: '30px 0px 0px 0px',
    fontFamily: '"Lato", sans-serif',
    fontWeight: '600',
    textAlign: 'center',
    color: 'Rgba(29, 23, 22, 0.82)',
  }

  return <p style={{ ...textStyle, ...style }}>{children}</p> // textStyle보다 style이 우선 적용되도록
}

Text.propTypes = {
  children: PropTypes.node.isRequired, // children은 필수 프로퍼티로 지정
}
