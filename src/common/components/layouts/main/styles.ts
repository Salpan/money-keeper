import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main: {
        margin: 8,
        padding: 8,

        display: 'flex',
        flexGrow: 1,
    },
    content: {
        background: '#ffffff',
        margin: '0px 8px',
        padding: 8,
        borderRadius: 8,

        display: 'flex',
        flexGrow: 1,
    },
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 32,
        color: token.colorTextDescription,
    },
    noContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
}));
