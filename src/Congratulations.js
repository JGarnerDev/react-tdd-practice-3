import React from 'react'

/**
 * Functional React component for a victory condition congratulations message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is falsy)
 */

export default ({ success }) => {
  return success ? (
    <div data-test='component-congratulations'>
      <div data-test='congratulations-message'>Winner!</div>
    </div>
  ) : (
    <div data-test='component-congratulations' />
  )
}
