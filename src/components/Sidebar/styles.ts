import { styled } from '../../styles'
import { NavLink } from 'react-router-dom'

export const ContainerSidebar = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  zIndex: '999',
  gap: '30px',
  height: '100vh',
  backgroundColor: '$blue500',
  color: '$white',
  position: 'fixed',
  variants: {
    collapsed: {
      true: {
        transition: '0.3s',
        transitionTimingFunction: 'ease-out',
        width: '80px',
        alignItems: 'center',
      },
      false: {
        width: '240px',
      },
    },
  },
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingTop: '30px',
  variants: {
    collapsed: {
      true: {
        paddingLeft: '0px',
      },
      false: {
        paddingLeft: '24px',
      },
    },
  },
})

export const LogoContainer = styled('div', {
  width: '40px',
})

export const Title = styled('h2', {
  fontWeight: '700',
  fontSize: '14px',
  color: '$white',
})

export const SubHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '24px',
  height: '25px',
  [`${Title}`]: {
    color: '$gray400',
    fontWeight: '400',
    fontSize: '12px',
  },
  variants: {
    collapsed: {
      true: {
        width: '100%',
        justifyContent: 'end',
      },
      false: {},
    },
  },
})

export const ToggleButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '-10px',
  padding: '3px',
  border: 'none',
  borderRadius: '50%',
  width: '20px',
  height: '20px',
  backgroundColor: '$yellow100',
  color: '$white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$yellow600',
  },
  '& svg': {
    transform: 'rotate(0deg)',
    transition: 'transform 0.5s',
    transitionTimingFunction: 'ease-in-out',
  },
  variants: {
    collapsed: {
      true: {
        '& svg': {
          transform: 'rotate(180deg)',
        },
      },
    },
  },
})

export const NavList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const StyledNavLink = styled(NavLink, {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: '$gray300',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '$blue100',
    color: '$blue50',
  },
  '&.active': {
    backgroundColor: '$blue100',
    color: '$blue50',
  },
  variants: {
    collapsed: {
      true: {
        padding: '9px',
        '&:hover': {
          border: 'none',
          borderRadius: '4px',
        },
      },
      false: {
        padding: '10px 0 10px 24px',
        '&.active': {
          borderRight: '5px solid $blue50',
        },
      },
    },
  },
})
