import { IconButton, Box, useColorMode } from '@chakra-ui/react'

export default function ThemeToggler() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Box textAlign="right" py={4} mr={12}>
        <IconButton
          icon={colorMode === 'light' ? 'MoonIcon' : 'SunIcon'}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Box>
    );
  } 