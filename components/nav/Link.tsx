import React from 'react'
import { Link } from 'react-router-dom';
import './Link.scss'

interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  urlPrefix?: string;
  type?: string;
  target?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  urlPrefix,
  type = '',
  ...props
}) => {

  return (
    <Link to={href} {...props} className={`link ${props.className || ''} ${type}`} onClick={(e) => {
      props.onClick && props.onClick(e)
    }}>
      {props.children}
    </Link>
  )
}

export default CustomLink
