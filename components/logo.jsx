import { Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  heading: 30px;
  line-height: 20px;
  padding: 10px;
`

const Logo = () => {
  return (
    <Link href={'/'} scroll={false}>
      <LogoBox>
        <Text fontFamily={'Noto Serif, sans-serif'} fontWeight={'bold'} ml={3}>
          Harsh Vyapari
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
