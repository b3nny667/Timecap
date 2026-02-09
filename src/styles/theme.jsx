import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2F4538',
      light: '#4A6B55',
      dark: '#1A2922',
      contrastText: '#FFFBF5',
    },
    secondary: {
      main: '#E8C4B7',
      light: '#F5EADF',
      dark: '#D3A595',
      contrastText: '#1A2922',
    },
    accent: {
      main: '#BF8552',
      light: '#D4A97A',
      dark: '#9C693A',
      contrastText: '#FFFBF5',
    },
    background: {
      default: '#F5EADF',
      paper: '#FFFBF5',
    },
    text: {
      primary: '#1A2922',
      secondary: '#4A6B55',
      disabled: '#9C9C9C',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FF9800',
    },
    error: {
      main: '#F44336',
    },
    info: {
      main: '#2196F3',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.4,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.025em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(47, 69, 56, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2F4538 0%, #4A6B55 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4A6B55 0%, #2F4538 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #E8C4B7 0%, #F5EADF 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #F5EADF 0%, #E8C4B7 100%)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
      variants: [
        {
          props: { variant: 'accent' },
          style: {
            background: 'linear-gradient(135deg, #BF8552 0%, #D4A97A 100%)',
            color: '#FFFBF5',
            '&:hover': {
              background: 'linear-gradient(135deg, #D4A97A 0%, #BF8552 100%)',
            },
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(232, 196, 183, 0.3)',
          background: '#FFFBF5',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 24px 48px rgba(47, 69, 56, 0.12)',
            borderColor: 'rgba(232, 196, 183, 0.6)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 251, 245, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(232, 196, 183, 0.3)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFBF5',
          borderRight: '1px solid rgba(232, 196, 183, 0.3)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '& fieldset': {
              borderColor: 'rgba(232, 196, 183, 0.5)',
              borderWidth: 2,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(191, 133, 82, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#BF8552',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 500,
          '&.MuiChip-filledPrimary': {
            background: 'linear-gradient(135deg, rgba(47, 69, 56, 0.1) 0%, rgba(74, 107, 85, 0.1) 100%)',
            color: '#2F4538',
            border: '1px solid rgba(47, 69, 56, 0.2)',
          },
          '&.MuiChip-filledSecondary': {
            background: 'linear-gradient(135deg, rgba(232, 196, 183, 0.2) 0%, rgba(245, 234, 223, 0.2) 100%)',
            color: '#1A2922',
            border: '1px solid rgba(232, 196, 183, 0.4)',
          },
          '&.MuiChip-filledAccent': {
            background: 'linear-gradient(135deg, rgba(191, 133, 82, 0.2) 0%, rgba(212, 169, 122, 0.2) 100%)',
            color: '#BF8552',
            border: '1px solid rgba(191, 133, 82, 0.4)',
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #2F4538 0%, #BF8552 100%)',
          color: '#FFFBF5',
          fontWeight: 600,
        },
      },
    },
  },
});
export default theme;
