// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        <MenuItem href='/' icon={<i className='ri-home-smile-line' />}>
          Dashboard
        </MenuItem>
        {/* <MenuItem href='/' icon={<i className='ri-home-smile-line' />}>
        <SubMenu label='Posts' icon={<i className='ri-file-copy-line' />}>
          <MenuItem href={`/all-posts`}>All Post</MenuItem>

          <MenuItem href={`/categories`}>Categories</MenuItem>
        </SubMenu>
        <MenuItem href='/place-to-visit' icon={<i className='ri-home-smile-line' />}>
          Place to Visit
        </MenuItem> */}
        <MenuItem href='/things-to-do' icon={<i className='ri-home-smile-line' />}>
          Things-to-do
        </MenuItem>

        <MenuItem href='/plan-your-trip' icon={<i className='ri-home-smile-line' />}>
          Plan Your Trip
        </MenuItem>
        <MenuItem href='/wild' icon={<i className='ri-home-smile-line' />}>
          Wild
        </MenuItem>
        <MenuItem href='/find-accommodation' icon={<i className='ri-home-smile-line' />}>
          Find Accommodation
        </MenuItem>

        {/* <MenuSection label='Apps & Pages'>
          <MenuItem href='/account-settings' icon={<i className='ri-user-settings-line' />}>
            Account Settings
          </MenuItem>
        </MenuSection> */}
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
