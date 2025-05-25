import Header from '@/components/header/header.component'
import Container from '@/components/ui/container.component'
import Heading from '@/components/ui/heading.component'
import { Text } from '@/components/ui/text.component'
import { Box, List } from '@chakra-ui/react'
import React from 'react'

const TermsAndConditions: React.FC = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Box mt={4}>
          <Heading as='h3' fontWeight={600}>
            Terms of Service
          </Heading>
          <Text my={4}>
            Welcome to Moto Venice. By accessing our website and using our
            services, you agree to comply with and be bound by the following
            terms and conditions. Please read them carefully...
          </Text>
          <List.Root as='ol' gap={4}>
            <List.Item>
              Use of the Website. You agree to use the website in a manner
              consistent with any and all applicable laws and regulations...
            </List.Item>
            <List.Item>
              Rental Terms. Our rental rates start at $100/day. All rentals are
              subject to availability and require a deposit...
            </List.Item>
            <List.Item>
              Sales Terms. Our motorcycles for sale range from $15,000 to
              $25,000. All sales are final and non-refundable...
            </List.Item>
          </List.Root>
        </Box>
        <Box mt={6} mb={4}>
          <Heading as='h3' fontWeight={600}>
            Privacy Policy
          </Heading>
          <Text my={4}>
            Your privacy is important to us. This privacy policy outlines how we
            collect, use, and protect your information...
          </Text>
          <List.Root as='ol' gap={4}>
            <List.Item>
              Use of the Website. You agree to use the website in a manner
              consistent with any and all applicable laws and regulations...
            </List.Item>
            <List.Item>
              Use of Information. We use the information we collect to provide,
              maintain, and improve our services, and to communicate with you...
            </List.Item>
            <List.Item>
              Sharing of Information. We do not share your personal information
              with third parties except as necessary to provide our services or
              as required by law...
            </List.Item>
          </List.Root>
        </Box>
      </Container>
    </Box>
  )
}
export default TermsAndConditions
